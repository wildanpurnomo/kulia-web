import BaseController from './base.controller';
import UserModel from '../models/user.model';
import ContentModel from '../models/content.model';
import SharedModel from '../models/shared.model';
import { mergeArrayByDateISO } from '../libs/array.lib';
import { ErrorHandler } from '../libs/error.lib';

class StoryController extends BaseController {
    constructor() {
        super();
        this.getUsersByUsername_GET = this.getUsersByUsername_GET.bind(this);
        this.getSampleWappitaUsers_GET = this.getSampleWappitaUsers_GET.bind(this);
        this.getPersonalStories_GET = this.getPersonalStories_GET.bind(this);
        this.getPersonalFollowing_GET = this.getPersonalFollowing_GET.bind(this);
        this.followUser_POST = this.followUser_POST.bind(this);
        this.unfollowUser_POST = this.unfollowUser_POST.bind(this);
        this.shareContent_POST = this.shareContent_POST.bind(this);
        this.updateAuthorPoints_PUT = this.updateAuthorPoints_PUT.bind(this);
    }

    async getUsersByUsername_GET(req, res, next) {
        try {
            let userList = await UserModel.discoverOtherUsers(req.decoded.id, req.query.username);
            res.status(200).json(this.createSuccessResponse(userList));
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async getSampleWappitaUsers_GET(req, res, next) {
        try {
            let userList = await UserModel.getSampleUser(req.decoded.id);
            res.status(200).json(this.createSuccessResponse(userList));
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async getPersonalStories_GET(req, res, next) {
        try {
            let stories = await this.generateUserPersonalStories(req.decoded.id);
            res.status(200).json(this.createSuccessResponse(stories));
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async getPersonalFollowing_GET(req, res, next) {
        try {
            let decoded = req.decoded;
            let followingList = await UserModel.getFollowingList(decoded.id);
            res.status(200).json(this.createSuccessResponse(followingList));
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async followUser_POST(req, res, next) {
        try {
            let decoded = req.decoded;
            let followingId = req.body.followingId;
            let followingList = await UserModel.followOtherUser(decoded.id, followingId);
            res.status(200).json(this.createSuccessResponse(followingList));
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async unfollowUser_POST(req, res, next) {
        try {
            let decoded = req.decoded;
            let unfollowingId = req.body.unfollowingId;
            let followingList = await UserModel.unfollowOtherUser(decoded.id, unfollowingId);
            res.status(200).json(this.createSuccessResponse(followingList));
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async shareContent_POST(req, res, next) {
        try {
            let contentData = await ContentModel.findById(req.body.contentId);
            if (!contentData.sharedBy.includes(req.decoded.id)) {
                req.body.sharerId = req.decoded.id;
                contentData.sharedBy.push(req.decoded.id);
                await SharedModel.create(req.body);
                await ContentModel.findOneAndUpdate({ _id: req.body.contentId }, { sharedBy: contentData.sharedBy });
                await UserModel.updatePoints(contentData.creatorId);
                let stories = await this.generateUserPersonalStories(req.decoded.id);
                res.status(200).json(this.createSuccessResponse(stories));
            } else {
                throw new ErrorHandler("Anda sudah membagikan konten ini ke beranda Wappita");
            }
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async updateAuthorPoints_PUT(req, res, next) {
        try {
            await UserModel.updatePoints(req.body.authorId);
            res.status(200).json(this.createSuccessResponse({ message: 'OK' }));
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async generateUserPersonalStories(userId) {
        let userData = await UserModel.findById(userId);
        let contentQueryCondition = [];
        let sharedQueryCondition = [];
        contentQueryCondition.push({
            creatorId: userId
        });
        sharedQueryCondition.push({
            sharerId: userId
        });
        userData.followingIds.forEach(item => {
            contentQueryCondition.push({
                creatorId: item
            });
            sharedQueryCondition.push({
                sharerId: item
            });
        });

        let contentList = await ContentModel.getPersonalStories(userId, contentQueryCondition);
        let sharedList = await SharedModel.getPersonalStories(sharedQueryCondition);
        return mergeArrayByDateISO(sharedList, contentList);
    }
}

export default new StoryController(); 