import * as express from 'express';
import { articleController, categoryController, userController, uploadController } from '../controllers/cms';
import conf from '../config';
import { userModel } from '../models';
import * as jwt from 'jsonwebtoken';

const router = express.Router();

// 需要权限的接口
const shouldMaster = [
    '/addCategory',
    '/editCategory',
    '/delCategory',
    '/addArticle',
    '/editArticle',
    '/delArticle',
    '/updateAllArticle'
];
const shouldLogin = ['/upload'];
router.use(async (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers.authorization;
    if (shouldMaster.indexOf(req.url) == -1) {
        return next();
    }
    if (token) {
        try {
            let userData = await userModel.findOne({ userName: jwt.verify(token, conf.jwtTokenSecret) });
            if (userData.is_manager) {
                return next();
            } else {
                return res.send({
                    code: -100,
                    desc: '权限不足，无法操作！'
                });
            }
        } catch (error) {
            console.log(error);
            return res.send({
                code: -100,
                desc: 'error'
            });
        }
    } else {
        return res.send({
            code: -100,
            desc: '权限不足，无法操作！'
        });
    }
});

router.post('/addCategory', categoryController.addCategory);
router.post('/editCategory', categoryController.editCategory);
router.post('/delCategory', categoryController.delCategory);
router.get('/getAllCategories', categoryController.getAllCategories);

router.post('/addArticle', articleController.addArticle);
router.post('/editArticle', articleController.editArticle);
router.post('/delArticle', articleController.delArticle);

router.post('/getArticle', articleController.getArticle);
// router.post('/updateAllArticle', articleController.updateAllArticle);

router.post('/login', userController.login);
router.post('/register', userController.register);
router.post('/editUserInfo', userController.editUserInfo);

router.post('/upload', uploadController);

export default router;
