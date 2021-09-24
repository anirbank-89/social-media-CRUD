import express from 'express';
import { getPosts, createPost, updatePosts } from '../controller/posts.js';

const router = express.Router();

// http://localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePosts);

export default router;