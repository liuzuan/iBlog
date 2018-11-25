"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cms_1 = require("../controllers/cms");
const config_1 = require("../config");
const models_1 = require("../models");
const jwt = require("jsonwebtoken");
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
router.use((req, res, next) => __awaiter(this, void 0, void 0, function* () {
    let token = req.body.token || req.query.token || req.headers.authorization;
    if (!~shouldMaster.indexOf(req.url)) {
        return next();
    }
    if (token) {
        try {
            let userData = yield models_1.userModel.findOne({ userName: jwt.verify(token, config_1.default.jwtTokenSecret) });
            if (userData.is_manager) {
                return next();
            }
            else {
                return res.send({
                    code: -100,
                    desc: 'Permission denied.Only administrators can operate.'
                });
            }
        }
        catch (error) {
            console.log(error);
            return res.send({
                code: -100,
                desc: 'error'
            });
        }
    }
    else {
        return res.send({
            code: -100,
            desc: 'Permission denied.Only administrators can operate.'
        });
    }
}));
router.post('/addCategory', cms_1.categoryController.addCategory);
router.post('/editCategory', cms_1.categoryController.editCategory);
router.post('/delCategory', cms_1.categoryController.delCategory);
router.get('/getAllCategories', cms_1.categoryController.getAllCategories);
router.post('/addArticle', cms_1.articleController.addArticle);
router.post('/editArticle', cms_1.articleController.editArticle);
router.post('/delArticle', cms_1.articleController.delArticle);
router.post('/getArticle', cms_1.articleController.getArticle);
// router.post('/updateAllArticle', articleController.updateAllArticle);
router.post('/login', cms_1.userController.login);
router.post('/register', cms_1.userController.register);
router.post('/editUserInfo', cms_1.userController.editUserInfo);
router.post('/upload', cms_1.uploadController);
exports.default = router;
//# sourceMappingURL=cms.js.map