import {articleModel} from "../../models/blog";

class ArticleController {
    constructor(){}
    async getArticle(req, res, next){
        try {
            const articles = await articleModel.find({}, '-_id');
            res.send(articles);
        } catch (err) {
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
            ...res.body
        });
        await newArticle.save((err, data) => {
            if (err) {
                return console.log(err);
            }
            res.send({
                desc: '添加文章成功！'
            });
        });
    }
}
export default new ArticleController()