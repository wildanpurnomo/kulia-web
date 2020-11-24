import BaseController from './base.controller';
import ContentModel from '../models/content.model';
import StorageModel from '../models/storage.model';
import path from 'path';
import { StorageInstance } from '../libs/storage.lib';
import mongoose from 'mongoose';

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
            let contentData = await ContentModel.findById(req.params.contentId);
            res.status(200).json(this.createSuccessResponse(contentData));
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async getPersonalContent_GET(req, res, next) {
        try {
            let token = req.cookies.token;
            let decoded = this.decodeToken(token);
            let contentList = await ContentModel.findById(decoded.id);
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
        if (req.files) {
            let contentId = mongoose.Types.ObjectId();
            let bucket = StorageInstance.bucket(process.env.CLOUD_BUCKET);
            let promises = [];
            req.files['media'].forEach(file => {
                let fileType = path.extname(file.originalname);
                let gcsName = `kuliah_content_media_${creatorId}_${Date.now()}${fileType}`;
                let blob = bucket.file(gcsName);

                let promise = new Promise((resolve, reject) => {
                    let blobStream = blob.createWriteStream();

                    blobStream.on('error', err => reject(err));

                    blobStream.on('finish', async () => {
                        try {
                            let toBeSaved = {
                                contentId: contentId,
                                creatorId: req.body.creatorId,
                                mediaUrl: `${process.env.GCLOUD_PUBLIC_BASE_URL}/${process.env.CLOUD_BUCKET}/${gcsName}`,
                                mediaType: fileType,
                                mediaOriginalName: file.originalname
                            }
                            resolve(await StorageModel.create(toBeSaved));
                        } catch (error) {
                            reject(error);
                        }
                    });

                    blobStream.end(file.buffer);
                });

                promises.push(promise);
            });

            Promise.all(promises)
                .then(async storageList => {
                    let mediaUrls = storageList.map(storageItem => {
                        return storageItem.mediaUrl
                    });
                    let toBeSaved = {
                        _id: contentId,
                        creatorId: req.body.creatorId,
                        title: req.body.title,
                        description: req.body.description,
                        mediaUrls: mediaUrls
                    }
                    let contentData = await ContentModel.create(toBeSaved);
                    res.status(200).json(this.createSuccessResponse(contentData));
                })
                .catch(error => {
                    console.error(error);
                    next(error);
                })
        } else {
            try {
                let contentData = await ContentModel.create(req.body);
                res.status(200).json(this.createSuccessResponse(contentData)); 
            } catch (error) {
                console.error(error);
                next(error);
            }
        }
    }

    async updateContent_PUT(req, res, next) {
        try {
            let contentData = await ContentModel.findOneAndUpdate({ _id: req.params.contentId }, req.body);
            res.status(200).json(this.createSuccessResponse(contentData));
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async deleteContent_DELETE(req, res, next) {
        try {
            await ContentModel.findOneAndDelete({ _id: req.params.id });
            let contentList = await ContentModel.find({});
            res.status(200).json(this.createSuccessResponse(contentList));
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
}

export default new ContentController(); 