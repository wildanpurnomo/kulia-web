import BaseController from './base.controller';
import UserModel from '../models/user.model';
import ContentModel from '../models/content.model';

class StoryController extends BaseController {
    constructor() {
        super();
        this.getPersonalStories_GET = this.getPersonalStories_GET.bind(this);
    }

    async getPersonalStories_GET(req, res, next) {
        try {
            let token = req.cookies.jwt;
            let decoded = this.decodeToken(token);
            let userData = await UserModel.findById(decoded.id);
            let queryCondition = [];
            userData.followingIds.forEach(item => {
                queryCondition.push({
                    creatorId: item
                });
            });
            let contentList = await ContentModel.find({ $and: queryCondition });
            res.status(200).json(this.createSuccessResponse(contentList));
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
}

export default new StoryController(); 