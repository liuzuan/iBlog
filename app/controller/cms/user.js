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
                let data = user[0]
                delete data._doc.password
                res.send({
                    data,
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
            console.log(error)
        }
    }
    async register(req, res, next) {
        try {
            const { userName, password } = req.body;
            // 以用户名作为密钥，入库前对密码二次加密
            const hmac = crypto.createHmac('sha1', userName);
            hmac.update(password);
            const newPassword = hmac.digest('hex');
            const user = await userModel.find({userName:userName})
            if (user.length) {
                res.send({
                    desc: '用户名已被占用！',
                    success: false
                });
                return;
            }
            const newUser = new userModel({
                userName: userName,
                password: newPassword
            });
            await newUser.save((err, data) => {
                let user = newUser
                delete user._doc.password
                res.send({
                    data: user,
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
