import { articleModel, categoryModel } from '../../models/blog';
import marked from 'marked';

class IndexController {
    constructor() {}
    async blogIndex(req, res, next) {
        const { category, title } = req.query;
        const allCategories = await categoryModel.find({ status: 1 });
        if (category) {
            try {
                let params = {};
                if (category === 'TOP') {
                    params = { isTop: true, status: 1 };
                } else {
                    params = { categoryName: category, status: 1 };
                }
                const articleList = await articleModel.find(params);
                if (articleList.length) {
                    res.render('pages/index', {
                        active_nav: 'blog',
                        is_list: true,
                        active_cate: category,
                        allCategories: allCategories,
                        articleList: articleList
                    });
                } else {
                    res.render('error', {
                        active_nav: 'error',
                        is_list: true,
                        active_cate: '',
                        allCategories: allCategories,
                        articleList: articleList
                    })
                }
            } catch (err) {
                console.log(err);
            }
        } else if (title) {
            try {
                const article = await articleModel.findOne({ alias: title }).populate('category');
                if (article) {
                    article.content = marked(article.content);
                    res.render('pages/index', {
                        active_nav: 'blog',
                        is_list: false,
                        active_cate: article.categoryName,
                        allCategories: allCategories,
                        article: article
                    });
                } else {
                    res.render('error', {
                        active_nav: 'error',
                        is_list: false,
                        active_cate: '',
                        allCategories: allCategories,
                        article: article
                    });
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                const articleList = await articleModel.find({ isTop: true, status: 1 });
                res.render('pages/index', {
                    active_nav: 'blog',
                    active_cate: 'TOP',
                    is_list: true,
                    allCategories: allCategories,
                    articleList: articleList
                });
            } catch (err) {
                console.log(err);
            }
        }
    }
}

export default new IndexController();
