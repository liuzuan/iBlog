import { articleModel, categoryModel } from '../../models/';

export default async (req, res, next) => {
    const { category, title } = req.query;
    const allCategories = await categoryModel.find({ status: 1 });
    try {
        if (category) {
            let params = {};
            if (category === 'TOP') {
                params = { status: 1 };
            } else {
                const categoryObj = await categoryModel.findOne({ name: category });
                params = { category: categoryObj._id, status: 1 };
            }
            const articleList = await articleModel
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
        } else if (title) {
            const article = await articleModel.findOne({ alias: title }).populate('category');
            if (article) {
                article.content = article.conHtml;
                res.render('pages/article', {
                    active_nav: 'blog',
                    css: 'article',
                    script: 'article',
                    active_cate: article.category.name,
                    allCategories,
                    article: article
                });
            } else {
                res.render('error', {
                    active_nav: 'blog',
                    css: 'error',
                    active_cate: '',
                    allCategories,
                    article
                });
            }
        } else {
            const articleList = await articleModel
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
        }
    } catch (err) {
        console.log(err);
    }
};
