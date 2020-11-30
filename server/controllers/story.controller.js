import BaseController from './base.controller';
import UserModel from '../models/user.model';
import ContentModel from '../models/content.model';

class StoryController extends BaseController {
    constructor() {
        super();
        this.getUsersByUsername_GET = this.getUsersByUsername_GET.bind(this);
        this.getPersonalStories_GET = this.getPersonalStories_GET.bind(this);
        this.getPersonalFollowing_GET = this.getPersonalFollowing_GET.bind(this);
        this.followUser_POST = this.followUser_POST.bind(this);
        this.unfollowUser_POST = this.unfollowUser_POST.bind(this);
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

    async getPersonalStories_GET(req, res, next) {
        try {
            let decoded = req.decoded;
            let userData = await UserModel.findById(decoded.id);
            let queryCondition = [];
            userData.followingIds.forEach(item => {
                queryCondition.push({
                    creatorId: item
                });
            });
            let contentList = queryCondition.length === 0 ? [] : await ContentModel.find({ $or: queryCondition }).populate({ path: 'creatorId', select: '-password' }).sort({ createdAt: 'descending' });
            res.status(200).json(this.createSuccessResponse(contentList));
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
            res.status(200).json(this.createSuccessResponse(followingList))
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
}

export default new StoryController(); 