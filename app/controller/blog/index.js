import { articleModel, categoryModel } from '../../models/blog';

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
            const article = await articleModel.find({ alias: title });
            console.log(article[0].createTime)
            // console.log(article)
                res.render('pages/index', {
                    active_nav: 'blog',
                    is_list: false,
                    active_cate: article.categoryName,
                    allCategories: allCategories,
                    article: article
                });
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
