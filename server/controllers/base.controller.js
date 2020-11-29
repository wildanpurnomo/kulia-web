import jwt from 'jsonwebtoken';

export default class BaseController {
    constructor() {
        this.tokenSecret = process.env.EXPRESS_JWT_SECRET || 'masihsukadia';
    }

    createToken(id) {
        return jwt.sign({ id }, this.tokenSecret);
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