import { userModel } from '../../models';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import conf from '../../../config';

const setToken = user => {
    return jwt.sign(user, conf.jwtTokenSecret);
};

const setNewPassword = password => {
    const hmac = crypto.createHmac('sha1', conf.jwtTokenSecret);
    hmac.update(password);
    return hmac.digest('hex');
};

class UserController {
    async login(req, res, next) {
        try {
            let { userName, password } = req.body;
            let newPassword = setNewPassword(password);
            let user = await userModel
                .findOneAndUpdate({ userName: userName, password: newPassword }, {})
                .select({ password: 0 })
                .setOptions({ lean: true });
            let token = setToken(userName);
            let user1 = await userModel.findOne({ userName: userName });
            if (user) {
                user.token = token;
                res.send({
                    data: user,
                    desc: '登录成功！',
                    success: true
                });
            } else if (user1) {
                res.send({
                    desc: '密码不正确',
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
            const newPassword = setNewPassword(password);
            const user = await userModel
                .findOne({ userName: userName })
                .select({ password: 0 })
                .setOptions({ lean: true });
            const token = setToken(userName);
            if (user) {
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
            const result = await newUser.save();
            result.token = token;
            res.send({
                data: result,
                desc: '注册成功！',
                success: true
            });
        } catch (error) {
            res.send({
                status: 0,
                desc: '注册失败！',
                success: false
            });
            return console.log(error);
        }
    }
    async editUserInfo(req, res, next) {
        try {
            const { _id, ...rest } = req.body;
            let token = setToken(req.body.userName);
            let user = await userModel
                .findOneAndUpdate({ _id: _id }, rest, { new: true })
                .select({ password: 0 })
                .setOptions({ lean: true });
            if (!user) {
                res.send({
                    desc: '用户不存在',
                    success: false
                });
                return;
            } else {
                user.token = token;
                res.send({
                    desc: '用户信息修改成功！',
                    success: true,
                    data: user
                });
            }
        } catch (error) {
            res.send({
                status: 0,
                desc: '修改用户信息失败！',
                success: false
            });
            return console.log(error);
        }
    }
}

export default new UserController();
