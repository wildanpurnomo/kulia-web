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

    getCookieOption(isLogout = false) {
        let cookieOption = {};
        cookieOption.httpOnly = true;
        
        if (process.env.IS_USING_GAE === true) {
            cookieOption.secure = true;
            cookieOption.sameSite = 'none';
        }

        if (isLogout) {
            cookieOption.maxAge = 1;
        }

        return cookieOption;
    }

    createSuccessResponse(resData) {
        return {
            status: 'Success',
            data: resData,
        };
    }
}