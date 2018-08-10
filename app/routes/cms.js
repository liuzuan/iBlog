import express from 'express';
import { article, category, user, upload } from '../controllers/cms/';
import conf from '../../config/';
import { userModel } from '../models/';
import jwt from 'jsonwebtoken';

const router = express.Router();

// 需要权限的接口
const shouldMaster = ['/addCategory', '/editCategory', '/delCategory', '/addArticle', '/editArticle', '/delArticle'];
const shouldLogin = ['/upload'];
router.use(async (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers.authorization;
    if (shouldMaster.indexOf(req.url) == -1) {
        return next()
    }
    if (token) {
        try {
            let user = await userModel.findOne({userName: jwt.verify(token, conf.jwtTokenSecret)});
            if (user.is_manager) {
                return next();
            } else {
                return res.send({
                    desc: '权限不足，无法操作！'
                });
            }
        } catch (error) {
            console.log(error)
            return res.send({
                desc: 'error'
            });
        }
    } else {
        return res.send({
            desc: '权限不足，无法操作！'
        });
    }
});

router.post('/addCategory', category.addCategory);
router.post('/editCategory', category.editCategory);
router.post('/delCategory', category.delCategory);
router.get('/getAllCategories', category.getAllCategories);

router.post('/addArticle', article.addArticle);
router.post('/editArticle', article.editArticle);
router.post('/delArticle', article.delArticle);

router.post('/getArticle', article.getArticle);

router.post('/login', user.login);
router.post('/register', user.register);
router.post('/editUserInfo', user.editUserInfo);

router.post('/upload', upload.uploadToCdn);

export default router;
