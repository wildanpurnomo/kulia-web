import jwt from 'jsonwebtoken';

export default class BaseController {
    constructor() {
        this.tokenMaxAge = 1 * 24 * 60 * 60 * 1000;
        this.tokenSecret = process.env.EXPRESS_JWT_SECRET || 'masihsukadia';
    }

    createToken(id) {
        return jwt.sign({ id }, this.tokenSecret, {
            expiresIn: this.tokenMaxAge
        });
    }

    decodeToken(token) {
        return jwt.verify(token, this.tokenSecret);
    }

    createSuccessResponse(resData) {
        return {
            status: 'Success',
            data: resData,
        };
    }
}