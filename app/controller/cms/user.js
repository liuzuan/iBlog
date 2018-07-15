import {userModel} from '../../models/blog';
import crypto from 'crypto';

class UserController {
    constructor() {}
    async login(req, res, next) {
        try {
            const { userName, password } = req.body;
            // 以用户名作为密钥，对密码二次加密后进行查询
            const hmac = crypto.createHmac('sha1', userName);
            hmac.update(password);
            const newPassword = hmac.digest('hex');
            let user = await userModel.find({ userName: userName, password: newPassword });
            let user1 = await userModel.find({ userName: userName});
            if (user.length) {
                const { userName, _id, avatar_url } = user[0];
                res.send({
                    userName,
                    _id,
                    avatar_url,
                    desc: '登录成功！',
                    success: true
                });
            } else if(user1.length) {
                res.send({
                    desc: '用户名或密码不正确',
                    success: false
                });
            } else {
                res.send({
                    desc: '用户不存在',
                    success: false
                });
            }
        } catch (error) {
            res.send({
                desc: '登录失败！',
                success: false
            });
        }
    }
    async register(req, res, next) {
        try {
            const { userName, password } = req.body;
            // 以用户名作为密钥，入库前对密码二次加密
            const hmac = crypto.createHmac('sha1', userName);
            hmac.update(password);
            const newPassword = hmac.digest('hex');
            console.log(newPassword);
            const newUser = new userModel({
                userName: userName,
                password: newPassword
            });
            await newUser.save((err, data) => {
                res.send({
                    userName: newUser.userName,
                    avatar_url: newUser.avatar_url,
                    _id: newUser._id,
                    desc: '注册成功！',
                    success: true
                });
            });
        } catch (error) {
            res.send({
                status: 0,
                type: 'ERROR_DATA',
                desc: '注册失败！',
                success: false
            });
            return console.log(error);
        }
    }
}

export default new UserController();
