import express from 'express';
import UserController from '../controllers/user.controller';
const router = express.Router();

router.get('/user/:userId', UserController.getProfileById_GET);

router.put('/user/edit_profile', UserController.updateProfile_PUT);

router.post('/user/edit_password', UserController.updatePassword_POST);

export default router;