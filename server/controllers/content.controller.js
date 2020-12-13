import BaseController from './base.controller';
import ContentModel from '../models/content.model';
import path from 'path';
import { StorageInstance } from '../libs/storage.lib';

class ContentController extends BaseController {
    constructor() {
        super();
        this.getContentById_GET = this.getContentById_GET.bind(this);
        this.getPersonalContent_GET = this.getPersonalContent_GET.bind(this);
        this.getContentByCreatorId_GET = this.getContentByCreatorId_GET.bind(this);
        this.createContent_POST = this.createContent_POST.bind(this);
        this.updateContent_PUT = this.updateContent_PUT.bind(this);
        this.deleteContent_DELETE = this.deleteContent_DELETE.bind(this);
    }

    async getContentById_GET(req, res, next) {
        try {
            let contentData = await ContentModel.findById(req.params.contentId).populate({ path: 'creatorId', select: '-password' });
            res.status(200).json(this.createSuccessResponse(contentData));
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async getPersonalContent_GET(req, res, next) {
        try {
            let token = req.cookies.jwt;
            let decoded = this.decodeToken(token);
            let contentList = await ContentModel.find({ creatorId: decoded.id });
            res.status(200).json(this.createSuccessResponse(contentList));
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async getContentByCreatorId_GET(req, res, next) {
        try {
            let contentData = await ContentModel.findById({ creatorId: req.params.creatorId });
            res.status(200).json(this.createSuccessResponse(contentData));
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async createContent_POST(req, res, next) {
        let token = req.cookies.jwt;
        let decoded = this.decodeToken(token);
        try {
            if (req.files['media']) {
                let bucket = StorageInstance.bucket(process.env.CLOUD_BUCKET);
                let promises = [];
                req.files['media'].forEach(file => {
                    let fileType = path.extname(file.originalname);
                    let gcsName = `wappita_${decoded.id}_${Date.now()}${fileType}`;
                    let blob = bucket.file(gcsName);

                    let promise = new Promise((resolve, reject) => {
                        let blobStream = blob.createWriteStream();

                        blobStream.on('error', err => reject(err));

                        blobStream.on('finish', async () => {
                            let url = `${process.env.GCLOUD_PUBLIC_BASE_URL}/${process.env.CLOUD_BUCKET}/${gcsName}`;
                            resolve(url);
                        });

                        blobStream.end(file.buffer);
                    });

                    promises.push(promise);
                });

                Promise.all(promises)
                    .then(async mediaUrls => {
                        let contentData = {
                            creatorId: decoded.id,
                            title: req.body.title,
                            description: req.body.description,
                            mediaUrls: mediaUrls,
                            youtubeUrl: req.body.youtubeUrl
                        }
                        let contentList = await ContentModel.addContent(contentData);
                        res.status(200).json(this.createSuccessResponse(contentList));
                    })
                    .catch(error => {
                        console.error(error);
                        next(error);
                    })
            } else {
                req.body.creatorId = decoded.id;
                let contentList = await ContentModel.addContent(req.body);
                res.status(200).json(this.createSuccessResponse(contentList));
            }
        } catch (error) {
            console.error(error);
            next(error);
        }

    }

    async updateContent_PUT(req, res, next) {
        try {
            let token = req.cookies.jwt;
            let decoded = this.decodeToken(token);
            req.body.slug = req.body.title.trim().replace(" ", "-");
            await ContentModel.findOneAndUpdate({ _id: req.params.contentId }, req.body);
            let contentList = await ContentModel.find({ creatorId: decoded.id });
            res.status(200).json(this.createSuccessResponse(contentList));
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async deleteContent_DELETE(req, res, next) {
        try {
            let token = req.cookies.jwt;
            let decoded = this.decodeToken(token);
            await ContentModel.findOneAndDelete({ _id: req.params.contentId });
            let contentList = await ContentModel.find({ creatorId: decoded.id });
            res.status(200).json(this.createSuccessResponse(contentList));
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
}

export default new ContentController(); 