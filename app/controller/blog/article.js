import { articleModel, categoryModel } from '../../models/blog';

class ArticleController {
    constructor() {}
    async getArticle(req, res, next) {
        try {
            const articles = await articleModel.find(req.body);
            res.send(articles);
        } catch (err) {
            console.log(err)
            console.log('获取文章内容失败');
            res.send({
                status: 0,
                type: 'ERROR_DATA',
                message: '获取文章内容失败!'
            });
        }
    }
    async addArticle(req, res, next) {
        let newArticle = new articleModel({
            ...req.body,
            createTime: Date.now(),
        });
        await newArticle.save((err, data) => {
            if (err) {
                res.send({
                    status: 0,
                    type: 'ERROR_DATA',
                    desc: '添加文章失败！'
                });
                return console.log(err);
            }
            res.send({
                desc: '添加文章成功！'
            });
        });
    }
    async editArticle(req, res, next) {
        const { _id, ...set } = req.body;
        await articleModel.findOneAndUpdate({ _id }, set, (err, data) => {
            if (err) {
                return console.log(err);
            }
            res.send({
                desc: '修改文章成功！'
            });
        });
    }
    async delArticle(req, res, next) {
        const { _id} = req.body;
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
