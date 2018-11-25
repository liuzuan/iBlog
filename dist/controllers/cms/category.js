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
class CategoryController {
    static getAllCategories(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield models_1.categoryModel.find({}).populate('articles');
                res.send(categories);
            }
            catch (error) {
                res.send({
                    status: 0,
                    type: 'ERROR_DATA',
                    desc: '获取分类失败'
                });
                return console.log(error);
            }
        });
    }
    static addCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newCategory = new models_1.categoryModel(Object.assign({}, req.body, { link: req.body.link || req.body.name }));
                yield newCategory.save();
                res.send({
                    desc: '添加分类成功！'
                });
            }
            catch (error) {
                res.send({
                    status: 0,
                    type: 'ERROR_DATA',
                    desc: '添加分类失败'
                });
                return console.log(error);
            }
        });
    }
    static editCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _a = req.body, { _id } = _a, set = __rest(_a, ["_id"]);
                yield models_1.categoryModel.findOneAndUpdate({ _id }, set);
                res.send({
                    desc: '修改成功！'
                });
            }
            catch (err) {
                res.send({
                    status: 0,
                    type: 'ERROR_DATA',
                    desc: '修改分类失败！'
                });
                return console.log(err);
            }
        });
    }
    static delCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { _id } = req.body;
                yield models_1.categoryModel.findByIdAndRemove(_id);
                res.send({
                    desc: '删除成功！'
                });
            }
            catch (err) {
                res.send({
                    status: 0,
                    type: 'ERROR_DATA',
                    desc: '删除分类失败！'
                });
                return console.log(err);
            }
        });
    }
}
exports.default = CategoryController;
//# sourceMappingURL=category.js.map