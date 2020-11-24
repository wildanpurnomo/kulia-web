import BaseController from './base.controller';
import UserModel from '../models/user.model';

class UserController extends BaseController {
    constructor() {
        super();
        this.getProfileById_GET = this.getProfileById_GET.bind(this);
        this.updateProfile_PUT = this.updateProfile_PUT.bind(this);
        this.updatePassword_POST = this.updatePassword_POST.bind(this);
    }

    async getProfileById_GET(req, res, next) {
        try {
            let userData = await UserModel.findById(req.params.userId);
            res.status(200).json(this.createSuccessResponse(userData));
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async updateProfile_PUT(req, res, next) {
        try {
            let token = req.cookies.jwt;
            let decoded = this.decodeToken(token);
            let userData = await UserModel.findOneAndUpdate({ _id: decoded.id }, req.body, { new: true });
            res.status(200).json(this.createSuccessResponse(userData));
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async updatePassword_POST(req, res, next) {
        try {
            let token = req.cookies.jwt;
            let decoded = this.decodeToken(token);
            let { oldPassword, newPassword } = req.body;
            let userData = await UserModel.alterPassword(decoded.id, oldPassword, newPassword);
            res.status(200).json(this.createSuccessResponse(userData));
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
}

export default new UserController(); 