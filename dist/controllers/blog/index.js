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
const models_1 = require("../../models/");
exports.default = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const { category, title } = req.query;
        const allCategories = yield models_1.categoryModel.find({ status: 1 });
        const renderErrorPage = (article = {}) => res.render('pages/error', {
            active_nav: 'blog',
            css: 'error',
            active_cate: '',
            allCategories,
            article
        });
        const renderTopPage = () => __awaiter(this, void 0, void 0, function* () {
            const articleList = yield models_1.articleModel
                .find({ status: 1 })
                .populate('category')
                .sort('-createTime');
            res.render('pages/index', {
                active_nav: 'blog',
                css: 'index',
                active_cate: 'TOP',
                allCategories,
                articleList
            });
        });
        if (category) {
            if (category === 'TOP') {
                renderTopPage();
            }
            else {
                const categoryObj = yield models_1.categoryModel.findOne({ name: category });
                if (categoryObj) {
                    const params = { category: categoryObj._id, status: 1 };
                    const articleList = yield models_1.articleModel
                        .find(params)
                        .populate('category')
                        .sort('-createTime');
                    res.render('pages/index', {
                        active_nav: 'blog',
                        css: 'index',
                        active_cate: category,
                        allCategories,
                        articleList
                    });
                }
                else {
                    renderErrorPage();
                }
            }
        }
        else if (title) {
            const article = yield models_1.articleModel.findOne({ alias: title }).populate('category');
            if (article) {
                article.content = article.conHtml;
                res.render('pages/article', {
                    active_nav: 'blog',
                    css: 'article',
                    script: 'article',
                    active_cate: article.category.name,
                    allCategories,
                    article
                });
            }
            else {
                renderErrorPage();
            }
        }
        else {
            renderTopPage();
        }
    }
    catch (err) {
        console.log(err);
    }
});
//# sourceMappingURL=index.js.map