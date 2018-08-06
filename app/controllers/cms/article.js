import { articleModel, categoryModel } from '../../models/blog';
import marked from 'marked';
// import hljs from 'highlight.js';
import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/';

marked.setOptions({
    highlight: (code, lang) => {
        if (!lang) {
            lang = 'js';
        }
        loadLanguages([lang]);
        return Prism.highlight(code, Prism.languages[lang]);
    }
});

class ArticleController {
    constructor() {
        
    }
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
                ...req.body,
                conHtml: marked(req.body.content)
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
            let article = await articleModel.findById(_id);
            await categoryModel.update({ _id: article.category }, { $pull: { articles: _id } });
            await articleModel.findByIdAndUpdate(_id, { ...set, category, conHtml: marked(req.body.content) });
            await categoryModel.update({ _id: category }, { $push: { articles: _id } });
            res.send({
                desc: '修改文章成功！'
            });
        } catch (err) {
            res.send({
                desc: '修改文章失败！'
            });
            return console.log(err);
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
