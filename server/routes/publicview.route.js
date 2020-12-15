import express from 'express';
import ContentController from '../controllers/content.controller';
const router = express.Router();

router.get('/content/:contentId', ContentController.getContentById_GET);

export default router;