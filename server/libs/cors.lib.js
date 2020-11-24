export function handleCors (req, res, next) {
    let allowedOrigin = process.env.EXPRESS_ALLOWED_ORIGINS || 'http://localhost:8080 http://localhost:8081';
    if (allowedOrigin.includes(' ')) {
        allowedOrigin = allowedOrigin.split(' ');
    } else {
        allowedOrigin = [allowedOrigin];
    }
    let currentOrigin = req.headers.origin;
    if (allowedOrigin.indexOf(currentOrigin) > -1) {
        res.header('Access-Control-Allow-Origin', currentOrigin);
    }
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");

    if (req.method === 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
}