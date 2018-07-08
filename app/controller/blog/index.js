import { articleModel, categoryModel } from '../../models/blog';
import category from './category';
import article from './article';

class IndexController {
    constructor() {}
    async blogIndex(req, res, next) {
        try {
            const allCategories = await categoryModel.find({}, '-_id');
            res.render('pages/index', {
                active_nav: 'blog',
                allCategories: allCategories
            });
        } catch (err) {}
    }
}

const index = new IndexController();

export default { category, article, index };
