import BaseController from './base.controller';
import UserModel from '../models/user.model';
import { ErrorHandler } from '../libs/error.lib';

class UserController extends BaseController {
    constructor() {
        super();
        this.updateProfile_PUT = this.updateProfile_PUT.bind(this);
        this.updatePassword_POST = this.updatePassword_POST.bind(this);
    }

    async updateProfile_PUT(req, res, next) {
        try {
            let token = req.cookies.jwt;
            let decoded = this.decodeToken(token);
            let { username, email } = req.body;
            let userData = await UserModel.alterProfile(decoded.id, email, username);
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
            let { oldPassword, newPassword, newPasswordConfirmation } = req.body;
            if (newPassword !== newPasswordConfirmation) {
                throw new ErrorHandler("Konfirmasi password tidak sesuai");
            } else if (newPassword.length === 0) {
                throw new ErrorHandler("Password baru tidak boleh kosong");
            } else {
                let userData = await UserModel.alterPassword(decoded.id, oldPassword, newPassword);
                res.status(200).json(this.createSuccessResponse(userData));
            }
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
}

export default new UserController(); 