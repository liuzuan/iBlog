import express from 'express';
import {article,category,user,upload} from '../controller/cms/index';
const router = express.Router();

router.post('/addCategory', category.addCategory);
router.post('/editCategory', category.editCategory);
router.post('/delCategory', category.delCategory);
router.get('/getAllCategories', category.getAllCategories);

router.post('/addArticle', article.addArticle)
router.post('/editArticle', article.editArticle)
router.post('/delArticle', article.delArticle)

router.post('/getArticle', article.getArticle)

router.post('/login', user.login)
router.post('/register', user.register)

router.post('/upload', upload.uploadHandle)


export default router;
