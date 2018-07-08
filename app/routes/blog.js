import express from 'express';
import blog from '../controller/blog/index';
const router = express.Router();

router.get('/', blog.index.blogIndex);
router.post('/addCategory', blog.category.addCategory);
router.post('/editCategory', blog.category.editCategory);
router.post('/delCategory', blog.category.delCategory);
router.get('/getAllCategories', blog.category.getAllCategories);

export default router;
