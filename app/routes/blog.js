import express from 'express';
import index from '../controller/blog/index';
const router = express.Router();

router.get('/', index.blogIndex);
router.get('/article', index.blogIndex);

export default router;
