import express from 'express';
import StoryController from '../controllers/story.controller';
const router = express.Router();

router.get('/story/discover_users', StoryController.getUsersByUsername_GET);

router.get('/story/personal', StoryController.getPersonalStories_GET);

router.get('/story/following', StoryController.getPersonalFollowing_GET);

router.post('/story/follow', StoryController.followUser_POST);

router.post('/story/unfollow', StoryController.unfollowUser_POST);

export default router;