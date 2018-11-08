import marked from 'marked';
// import hljs from 'highlight.js';
import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/';
import { articleModel, categoryModel } from '../../models';

let renderer = new marked.Renderer();

let dir = [];

renderer.heading = (text, level, raw) => {
    let index = dir.length;
    dir.push({ level, text, id: `dir_${index}` });
    return `<h${level} class='h_title' id='dir_${index}'>${text}</h${level}>`;
};

marked.setOptions({
    highlight: (code, lang) => {
        !lang && (lang = 'javascript');
        loadLanguages([lang]);
        return Prism.highlight(code, Prism.languages[lang]);
    },
    renderer
});
class ArticleController {
    async getArticle(req, res, next) {
        const { page, pageSize, title = '', ...rest } = req.body;
        try {
            const params = { title: { $regex: title.trim(), $options: 'i' }, ...rest };
            const count = await articleModel.countDocuments(params);
            const result = await articleModel
                .find(params)
                .populate('category')
                .sort('-updateTime')
                .skip((page - 1) * pageSize)
                .limit(pageSize);
            res.send({ data: result, count });
        } catch (err) {
            res.send({
                code: -100,
                message: '获取文章内容失败!'
            });
            return console.log(err);
        }
    }

    async updateAllArticle(req, res, next) {
        try {
            const a = await articleModel.update({}, { dir }, { multi: true });
            console.log(a);
            res.send({
                success: true,
                desc: '全部文章已更新！'
            });
        } catch (error) {
            res.send({
                success: false,
                desc: '更新失败！'
            });
            console.log(error);
        }
    }

    async addArticle(req, res, next) {
        try {
            let newArticle = new articleModel({
                ...req.body,
                conHtml: marked(req.body.content),
                dir
            });
            await newArticle.save();
            await categoryModel.update({ _id: newArticle.category }, { $push: { articles: newArticle._id } });
            res.send({
                code: 0,
                desc: '添加文章成功！'
            });
            dir = [];
        } catch (err) {
            res.send({
                code: -100,
                desc: '添加文章失败！'
            });
            return console.log(err);
        }
    }
    async editArticle(req, res, next) {
        const { _id, category, ...rest } = req.body;
        try {
            let article = await articleModel.findById(_id);
            if (article.category !== category) {
                await categoryModel.update({ _id: article.category }, { $pull: { articles: _id } });
                await categoryModel.update({ _id: category }, { $push: { articles: _id } });
            }
            if (req.body.content) {
                await articleModel.findByIdAndUpdate(_id, {
                    ...rest,
                    category,
                    conHtml: marked(req.body.content),
                    dir
                });
            } else {
                await articleModel.findByIdAndUpdate(_id, { ...rest });
            }
            res.send({
                code: 0,
                desc: '修改文章成功！'
            });
            dir = [];
        } catch (err) {
            res.send({
                code: -100,
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
                    code: -100,
                    desc: '删除文章失败！'
                });
                return console.log(err);
            }
            res.send({
                code: 0,
                desc: '删除文章成功！'
            });
        });
    }
}
export default new ArticleController();
