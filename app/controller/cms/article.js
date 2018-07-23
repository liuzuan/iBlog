import { articleModel, categoryModel } from '../../models/blog';

class ArticleController {
    constructor() {}
    async getArticle(req, res, next) {
        const { page, pageSize, ...params } = req.body;
        try {
            const count = await articleModel.countDocuments(params);
            const result = await articleModel
                .find(params)
                .populate('category')
                .sort('-updateTime')
                .skip((page - 1) * pageSize)
                .limit(pageSize);
            res.send({ data: result, count: count });
        } catch (err) {
            res.send({
                status: 0,
                type: 'ERROR_DATA',
                message: '获取文章内容失败!'
            });
            return console.log(err);
        }
    }

    async addArticle(req, res, next) {
        try {
            let newArticle = new articleModel({
                ...req.body
            });
            await newArticle.save();
            await categoryModel.update({ _id: newArticle.category }, { $push: { articles: newArticle._id } });
            res.send({
                desc: '添加文章成功！'
            });
        } catch (err) {
            res.send({
                status: 0,
                type: 'ERROR_DATA',
                desc: '添加文章失败！'
            });
            return console.log(err);
        }
    }

    async editArticle(req, res, next) {
        const { _id, category, ...set } = req.body;
        try {
            let article = await articleModel.find({ _id: _id });
            await categoryModel.update({ _id: article[0].category }, { $pull: { articles: _id } });
            await articleModel.findOneAndUpdate({ _id }, { ...set, category });
            await categoryModel.update({ _id: category }, { $push: { articles: req.body._id } });
            res.send({
                desc: '修改文章成功！'
            });
        } catch (err) {
            res.send({
                desc: '修改文章失败！'
            });
        }
    }
    
    async delArticle(req, res, next) {
        const { _id } = req.body;
        await articleModel.findByIdAndRemove(_id, (err, data) => {
            if (err) {
                res.send({
                    status: 0,
                    type: 'ERROR_DATA',
                    desc: '删除文章失败！'
                });
                return console.log(err);
            }
            res.send({
                desc: '删除文章成功！'
            });
        });
    }
}
export default new ArticleController();
