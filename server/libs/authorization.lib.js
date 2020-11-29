import jwt from 'jsonwebtoken';
const tokenSecret = process.env.EXPRESS_JWT_SECRET || 'masihsukadia';

export function verifyJwt(req, res, next) {
    let token = req.cookies.jwt;
    let decoded = jwt.verify(token, tokenSecret);
    if (decoded) {
        req.decoded = decoded;
        next();
    } else {
        next('router');
    }
}