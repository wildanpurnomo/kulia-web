import BaseController from './base.controller';
import UserModel from '../models/user.model';
import { ErrorHandler } from '../libs/error.lib';

class AuthController extends BaseController {
    constructor() {
        super();
        this.login_POST = this.login_POST.bind(this);
        this.register_POST = this.register_POST.bind(this);
        this.authenticate_GET = this.authenticate_GET.bind(this);
    }

    async login_POST(req, res, next) {
        try {
            let { username, password } = req.body;
            let user = await UserModel.login(username, password);
            user.password = undefined;
            let token = this.createToken(user._id);
            res.cookie('jwt', token, { httpOnly: true, maxAge: this.tokenMaxAge});
            res.status(200).json(this.createSuccessResponse(user));
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async register_POST(req, res, next) {
        try {
            let { username, email, password, passwordConfirmation } = req.body;
            if (password != passwordConfirmation) {
                throw new ErrorHandler("Konfirmasi password tidak sesuai");
            } else {
                let user = await UserModel.create({ username, email, password });
                user.password = undefined;
                let token = this.createToken(user._id);
                res.cookie('jwt', token, { httpOnly: true, maxAge: this.tokenMaxAge});
                res.status(200).json(this.createSuccessResponse(user));
            }
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async authenticate_GET(req, res, next) {
        try {
            let token = req.cookies.jwt;
            let decoded = this.decodeToken(token);
            let user = await UserModel.findById(decoded.id);
            user.password = undefined;
            res.status(200).json(this.createSuccessResponse(user));
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
}

export default new AuthController(); 