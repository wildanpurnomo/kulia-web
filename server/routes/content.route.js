import express from 'express';
import ContentController from '../controllers/content.controller';
import { MulterInstance } from '../libs/storage.lib';
const router = express.Router();

router.get('/content/:contentId', ContentController.getContentById_GET);

router.get('/content/personal/me', ContentController.getPersonalContent_GET);

router.get('/content/by_creator/:creatorId', ContentController.getContentByCreatorId_GET);

router.post('/content', MulterInstance.fields([{ name: 'media', maxCount: 10 }]), ContentController.createContent_POST);

router.put('/content/edit/:contentId', ContentController.updateContent_PUT);

router.delete('/content/delete/:contentId', ContentController.deleteContent_DELETE);

export default router;