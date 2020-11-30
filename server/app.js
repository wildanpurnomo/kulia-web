// ES6 to ES5 Async Await Support
import "core-js/stable";
import "regenerator-runtime/runtime";

// Use dotenv middleware, for development
import dotenv from 'dotenv';
dotenv.config();

// Use Express framework
import express from 'express';
const app = express();

// Use cookieParser middleware
import cookieParser from 'cookie-parser';
app.use(cookieParser());

// Use bodyParser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use CORS middleware
import { handleCors } from './libs/cors.lib';
app.use(handleCors);

// Host Vue SPA
import history from 'connect-history-api-fallback';
import path from 'path';
app.use(history({
    rewrites: [{
        from: /^\/api\/.*$/,
        to: (context) => {
            return context.parsedUrl.path
        }
    }]
}));
app.use(express.static(path.join(__dirname, '../public/dist')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/dist'));
});

// Use Morgan logger middleware
import logger from 'morgan';
app.use(logger('dev'));

// Use Auth Router without Authorization middleware
import authRouter from './routes/auth.route';
app.use('/api', authRouter);

// Use Authorization middleware for the rest of the routes
import { verifyJwt } from './libs/authorization.lib';
import usersRouter from './routes/user.route';
import contentRouter from './routes/content.route';
import storyRouter from './routes/story.route';
app.use(verifyJwt);
app.use('/api', usersRouter);
app.use('/api', contentRouter);
app.use('/api', storyRouter);

// Use errorHandler middleware
import { handleError } from './libs/error.lib';
app.use((err, req, res, next) => {
    handleError(err, req, res, next);
});

export default app;
