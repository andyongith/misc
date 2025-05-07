import express from 'express';
import { protectRoute } from '../middlewares/auth.middleware.js';
import { getFeedPosts, createPost, deletePost, getPostById, createComment, likePost, dislikePost } from '../controllers/post.controller.js';


const router = express.Router();

router.get('/', protectRoute, getFeedPosts);
router.post('/', protectRoute, createPost);
router.delete('/delete/:id', protectRoute, deletePost);
router.get('/:id', protectRoute, getPostById);
router.post('/:id/commment', protectRoute, createComment);
router.post('/:id/like', protectRoute, likePost);
router.post('/:id/dislike', protectRoute, dislikePost);


export default router;
