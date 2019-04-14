"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const conf = require('config-lite')(__dirname);
const setToken = user => {
    return jwt.sign(user, conf.jwtTokenSecret);
};
const setNewPassword = password => {
    const hmac = crypto.createHmac('sha1', conf.jwtTokenSecret);
    hmac.update(password);
    return hmac.digest('hex');
};
class UserController {
    static login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userName, password } = req.body;
                const newPassword = setNewPassword(password);
                const user = yield models_1.userModel
                    .findOneAndUpdate({ userName, password: newPassword }, {})
                    .select({ password: 0 })
                    .setOptions({ lean: true });
                const token = setToken(userName);
                const user1 = yield models_1.userModel.findOne({ userName });
                if (user) {
                    user.token = token;
                    res.send({
                        data: user,
                        desc: '登录成功！',
                        success: true
                    });
                }
                else if (user1) {
                    res.send({
                        desc: '密码不正确',
                        success: false
                    });
                }
                else {
                    res.send({
                        desc: '用户不存在',
                        success: false
                    });
                }
            }
            catch (error) {
                res.send({
                    desc: '登录失败！',
                    success: false
                });
                console.log(error);
            }
        });
    }
    static register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userName, password } = req.body;
                const newPassword = setNewPassword(password);
                const user = yield models_1.userModel
                    .findOne({ userName })
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
                const newUser = new models_1.userModel({
                    userName,
                    password: newPassword
                });
                const data = yield newUser.save();
                console.log(data);
                data.token = token;
                delete data.password;
                res.send({
                    data,
                    desc: '注册成功！',
                    success: true
                });
            }
            catch (error) {
                res.send({
                    status: 0,
                    desc: '注册失败！',
                    success: false
                });
                return console.log(error);
            }
        });
    }
    static editUserInfo(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _a = req.body, { _id } = _a, rest = __rest(_a, ["_id"]);
                let token = setToken(req.body.userName);
                let user = yield models_1.userModel
                    .findOneAndUpdate({ _id: _id }, rest, { new: true })
                    .select({ password: 0 })
                    .setOptions({ lean: true });
                if (!user) {
                    res.send({
                        desc: '用户不存在',
                        success: false
                    });
                    return;
                }
                else {
                    user.token = token;
                    res.send({
                        desc: '用户信息修改成功！',
                        success: true,
                        data: user
                    });
                }
            }
            catch (error) {
                res.send({
                    status: 0,
                    desc: '修改用户信息失败！',
                    success: false
                });
                return console.log(error);
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=user.js.map