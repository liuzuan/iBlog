"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const formidable = require("formidable");
const fs = require("fs");
const qiniu = require("qiniu");
const models_1 = require("../../models");
qiniu.conf.ACCESS_KEY = 'HWBhm1kwS_YY-bHTR9Cl2gWr20eSks14PhIaTqP7';
qiniu.conf.SECRET_KEY = 'lveC7RDx27R7NzTMtBNM3BxYKbsPao-j8sPnF7KT';
exports.default = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const form = formidable.IncomingForm();
        const bucket = 'liuzuanncdn';
        form.uploadDir = 'public/upload/';
        form.keepExtensions = true;
        form.maxFieldsSize = 5 * 1024 * 1024;
        const uploadFile = (uptoken, key, localFile, title) => {
            const extra = new qiniu.io.PutExtra();
            qiniu.io.putFile(uptoken, key, localFile, extra, (err, ret) => __awaiter(this, void 0, void 0, function* () {
                const url = 'http://cdn.liuzuann.com/' + ret.key;
                if (req.query && req.query.dir === 'gallery') {
                    const img = new models_1.galleryModel({
                        title: title.slice(0, title.indexOf('.')),
                        thumbnail: url + '-thumb',
                        full: url + '-thin'
                    });
                    yield img.save();
                }
                res.send({
                    success: true,
                    name: ret.key,
                    url: url + '-thin'
                });
            }));
        };
        form.parse(req, (err, fields, files) => __awaiter(this, void 0, void 0, function* () {
            const uniqueName = (new Date().getTime() + Math.ceil(Math.random() * 10000)).toString(16);
            const originalname = files.file.name;
            const key = (req.query && req.query.dir ? `images/${req.query.dir}/` : 'images/other/') +
                uniqueName +
                '__' +
                originalname;
            const repath = 'public/upload/' + originalname;
            fs.renameSync(files.file.path, repath);
            let putPolicy = new qiniu.rs.PutPolicy(bucket + ':' + key);
            const token = putPolicy.token();
            uploadFile(token.toString(), key, repath, originalname);
            fs.unlinkSync(repath);
        }));
    }
    catch (err) {
        console.log('上传七牛失败-->', err);
        res.send({
            success: false,
            desc: '上传失败'
        });
    }
});
//# sourceMappingURL=upload.js.map