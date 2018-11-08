"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const marked = require("marked");
const prismjs_1 = require("prismjs");
const components_1 = require("prismjs/components/");
const models_1 = require("../../models/");
let renderer = new marked.Renderer();
let dir = [];
renderer.heading = (text, level, raw) => {
    let index = dir.length;
    dir.push({ level, text, id: `dir_${index}` });
    return `<h${level} class='h_title' id='dir_${index}'>${text}</h${level}>`;
};
marked.setOptions({
    highlight: (code, lang) => {
        !lang && (lang = 'javascript');
        components_1.default([lang]);
        return prismjs_1.default.highlight(code, prismjs_1.default.languages[lang]);
    },
    renderer
});
class ArticleController {
    getArticle(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const _a = req.body, { page, pageSize, title = '' } = _a, rest = __rest(_a, ["page", "pageSize", "title"]);
            try {
                const params = Object.assign({ title: { $regex: title.trim(), $options: 'i' } }, rest);
                const count = yield models_1.articleModel.countDocuments(params);
                const result = yield models_1.articleModel
                    .find(params)
                    .populate('category')
                    .sort('-updateTime')
                    .skip((page - 1) * pageSize)
                    .limit(pageSize);
                res.send({ data: result, count });
            }
            catch (err) {
                res.send({
                    code: -100,
                    message: '获取文章内容失败!'
                });
                return;
            }
        });
    }
    updateAllArticle(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const a = yield models_1.articleModel.update({}, { dir }, { multi: true });
                res.send({
                    success: true,
                    desc: '全部文章已更新！'
                });
            }
            catch (error) {
                res.send({
                    success: false,
                    desc: '更新失败！'
                });
            }
        });
    }
    addArticle(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let newArticle = new models_1.articleModel(Object.assign({}, req.body, { conHtml: marked(req.body.content), dir }));
                yield newArticle.save();
                yield models_1.categoryModel.update({ _id: newArticle.category }, { $push: { articles: newArticle._id } });
                res.send({
                    code: 0,
                    desc: '添加文章成功！'
                });
                dir = [];
            }
            catch (err) {
                res.send({
                    code: -100,
                    desc: '添加文章失败！'
                });
                return;
            }
        });
    }
    editArticle(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const _a = req.body, { _id, category } = _a, rest = __rest(_a, ["_id", "category"]);
            try {
                let article = yield models_1.articleModel.findById(_id);
                if (article.category !== category) {
                    yield models_1.categoryModel.update({ _id: article.category }, { $pull: { articles: _id } });
                    yield models_1.categoryModel.update({ _id: category }, { $push: { articles: _id } });
                }
                if (req.body.content) {
                    yield models_1.articleModel.findByIdAndUpdate(_id, Object.assign({}, rest, { category, conHtml: marked(req.body.content), dir }));
                }
                else {
                    yield models_1.articleModel.findByIdAndUpdate(_id, Object.assign({}, rest));
                }
                res.send({
                    code: 0,
                    desc: '修改文章成功！'
                });
                dir = [];
            }
            catch (err) {
                res.send({
                    code: -100,
                    desc: '修改文章失败！'
                });
                return;
            }
        });
    }
    delArticle(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id } = req.body;
            yield models_1.articleModel.findByIdAndRemove(_id, (err, data) => {
                if (err) {
                    res.send({
                        code: -100,
                        desc: '删除文章失败！'
                    });
                    return;
                }
                res.send({
                    code: 0,
                    desc: '删除文章成功！'
                });
            });
        });
    }
}
exports.default = new ArticleController();
//# sourceMappingURL=article.js.map