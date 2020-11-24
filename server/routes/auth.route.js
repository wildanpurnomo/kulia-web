import express from 'express';
import AuthController from '../controllers/auth.controller';
const router = express.Router();

router.get('/auth/authenticate', AuthController.authenticate_GET);

router.post('/auth/register', AuthController.register_POST);

router.post('/auth/login', AuthController.login_POST);

router.post('/auth/logout', AuthController.logout_POST);

export default router;
