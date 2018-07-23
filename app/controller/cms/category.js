import { categoryModel } from '../../models/blog';

class CategoryController {
    constructor() {}
    async getAllCategories(req, res, next) {
        try {
            const categories = await categoryModel.find({}).populate('articles');
            res.send(categories);
        } catch (error) {
            res.send({
                status: 0,
                type: 'ERROR_DATA',
                desc: '获取分类失败'
            });
            return console.log(error);
        }
    }

    async addCategory(req, res, next) {
        try {
            const newCategory = new categoryModel({
                ...req.body,
                link: req.body.link || req.body.name
            });
            await newCategory.save();
            res.send({
                desc: '添加分类成功！'
            });
        } catch (error) {
            res.send({
                status: 0,
                type: 'ERROR_DATA',
                desc: '添加分类失败'
            });
            return console.log(error);
        }
    }

    async editCategory(req, res, next) {
        try {
            const { _id, ...set } = req.body;
            await categoryModel.findOneAndUpdate({ _id }, { ...set });
            res.send({
                desc: '修改成功！'
            });
        } catch (err) {
            res.send({
                status: 0,
                type: 'ERROR_DATA',
                desc: '修改分类失败！'
            });
            return console.log(err);
        }
    }

    async delCategory(req, res, next) {
        try {
            const { _id } = req.body;
            await categoryModel.findByIdAndRemove(_id);
            res.send({
                desc: '删除成功！'
            });
        } catch (err) {
            res.send({
                status: 0,
                type: 'ERROR_DATA',
                desc: '删除分类失败！'
            });
            return console.log(err);
        }
    }
}

export default new CategoryController();
