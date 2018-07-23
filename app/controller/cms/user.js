import { userModel } from '../../models/blog';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import conf from '../../../config/index';

const setToken = user => {
    return jwt.sign(user, conf.jwtTokenSecret);
};

const setNewPassword = (userName, password) => {
    const hmac = crypto.createHmac('sha1', userName);
    hmac.update(password);
    return hmac.digest('hex');
};

class UserController {
    constructor() {}
    async login(req, res, next) {
        try {
            const { userName, password } = req.body;
            const newPassword = setNewPassword(userName, password);
            // console.log(analysisToken(token));  
            let user = await userModel.find({ userName: userName, password: newPassword });
            const token = setToken(user[0].userName);
            console.log(token);
            let user1 = await userModel.find({ userName: userName });
            if (user.length) {
                let data = user[0];
                data._doc.token = token;
                delete data._doc.password;
                res.send({
                    data,
                    desc: '登录成功！',
                    success: true
                });
            } else if (user1.length) {
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
            console.log(error);
        }
    }
    async register(req, res, next) {
        try {
            const { userName, password } = req.body;
            const newPassword = setNewPassword(userName, password);
            const user = await userModel.find({ userName: userName });
            const token = setToken(userName);
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
                let user = newUser;
                user.token = token;
                delete user._doc.password;
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