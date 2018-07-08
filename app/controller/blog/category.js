import { categoryModel } from '../../models/blog';

class CategoryController {
    constructor() {}
    async getAllCategories(req, res, next) {
        try {
            const categories = await categoryModel.find({}, '-_id');
            res.send(categories);
        } catch (err) {
            console.log('获取categories失败');
            res.send({
                status: 0,
                type: 'ERROR_DATA',
                desc: '获取分类失败'
            });
        }
    }
    
    async addCategory(req, res, next) {
        const newCategory = new categoryModel({
            ...req.body,
            createTime: Date.now()
        });
        await newCategory.save((err, data) => {
            if (err) {
                res.send({
                    status: 0,
                    type: 'ERROR_DATA',
                    desc: '添加分类失败'
                });
                return console.log(err);
            }
            res.send({
                desc: '添加分类成功！'
            });
        });
    }
    async editCategory(req, res, next) {
        try {
            const { _id, ...set } = req.body;
            categoryModel.findOneAndUpdate({ _id }, { ...set, modifyTime: Date.now() }, (err, data) => {
                if (err) {
                    res.send({
                        status: 0,
                        type: 'ERROR_DATA',
                        desc: '修改分类失败！'
                    });
                    return console.log(err);
                }
                res.send({
                    desc: '修改成功！'
                });
            });
        } catch (err) {
            console.log(err);
        }
    }
    async delCategory(req, res, next) {
        try {
            const { _id } = req.body;
            categoryModel.findByIdAndRemove(_id, (err, data) => {
                if (err) {
                    res.send({
                        status: 0,
                        type: 'ERROR_DATA',
                        desc: '删除分类失败！'
                    });
                    return console.log(err);
                }
                res.send({
                    desc: '删除成功！'
                });
            });
        } catch (err) {
            console.log(err);
        }
    }
}

export default new CategoryController();
