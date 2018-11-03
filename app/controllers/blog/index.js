import { article, category as categoryModel } from '../../models/';

export default async (req, res, next) => {
    try {
        const { category, title } = req.query;
        const allCategories = await categoryModel.find({ status: 1 });
        const renderErrorPage = (article = {}) =>
            res.render('pages/error', {
                active_nav: 'blog',
                css: 'error',
                active_cate: '',
                allCategories,
                article
            });
        const renderTopPage = async () => {
            const articleList = await article
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
        };
        if (category) {
            if (category === 'TOP') {
                renderTopPage();
            } else {
                const categoryObj = await categoryModel.findOne({ name: category });
                if (categoryObj) {
                    const params = { category: categoryObj._id, status: 1 };
                    const articleList = await article
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
                } else {
                    renderErrorPage();
                }
            }
        } else if (title) {
            const article = await article.findOne({ alias: title }).populate('category');
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
            } else {
                renderErrorPage(article);
            }
        } else {
            renderTopPage();
        }
    } catch (err) {
        console.log(err);
    }
};
