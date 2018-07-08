import express from 'express';
import index from '../controller/blog/index';
import article from '../controller/blog/article';
import category from '../controller/blog/category';
const router = express.Router();

router.get('/', index.blogIndex);
router.get('/article', index.blogIndex);

router.post('/addCategory', category.addCategory);
router.post('/editCategory', category.editCategory);
router.post('/delCategory', category.delCategory);
router.get('/getAllCategories', category.getAllCategories);

router.post('/addArticle', article.addArticle)
router.post('/editArticle', article.editArticle)
router.post('/delArticle', article.delArticle)
router.get('/getArticle', article.getArticle)
export default router;
