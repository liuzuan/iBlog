import { articleModel, categoryModel } from '../../models/blog';
import marked from 'marked';

class IndexController {
    constructor() {}
    async blogIndex(req, res, next) {
        const { category, title } = req.query;
        const allCategories = await categoryModel.find({});
        if (category) {
            try {
                const articleList = await articleModel.find({ categoryName: category });
                res.render('pages/index', {
                    active_nav: 'blog',
                    is_list: true,
                    active_cate: category,
                    allCategories: allCategories,
                    articleList: articleList
                });
            } catch (error) {}
        } else if (title) {
            try {
                const article = await articleModel.find({ alias: title });
                article[0].content = marked(article[0].content);
                res.render('pages/index', {
                    active_nav: 'blog',
                    is_list: false,
                    active_cate: article[0].categoryName,
                    allCategories: allCategories,
                    article: article
                });
            } catch (err) {}
        } else {
            try {
                const articleList = await articleModel.find({ categoryName: 'top' });
                res.render('pages/index', {
                    active_nav: 'blog',
                    active_cate: '',
                    is_list: true,
                    allCategories: allCategories,
                    articleList: articleList
                });
            } catch (err) {}
        }
    }
}

export default new IndexController();
