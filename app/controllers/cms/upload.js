// import multer from 'multer';
import qiniu from 'qiniu';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { galleryModel } from '../../models/';
qiniu.conf.ACCESS_KEY = 'HWBhm1kwS_YY-bHTR9Cl2gWr20eSks14PhIaTqP7';
qiniu.conf.SECRET_KEY = 'lveC7RDx27R7NzTMtBNM3BxYKbsPao-j8sPnF7KT';
class uploadController {
    async uploadToCdn(req, res, next) {
        try {
            const form = formidable.IncomingForm();
            const bucket = 'liuzuanncdn';
            form.uploadDir = 'public/upload/';
            form.keepExtensions = true;
            function uploadFile(uptoken, key, localFile, title) {
                const extra = new qiniu.io.PutExtra();
                const url = 'http://cdn.liuzuann.com/' + ret.key;
                qiniu.io.putFile(uptoken, key, localFile, extra, async(err, ret) => {
                    if (req.query) {
                        const img = new galleryModel({
                            title: title.slice(0, title.indexOf('.')),
                            thumbnail: url + '-thumb',
                            full: url + '-thin'
                        });
                        await img.save((err, data) => {
                            res.send({
                                success: true,
                                name: ret.key,
                                url: url + '-thin'
                            });
                        });
                    }
                    res.send({
                        success: true,
                        name: ret.key,
                        url: url + '-thin'
                    });
                });
            }
            form.parse(req, (err, fields, files) => {
                const imgName = (new Date().getTime() + Math.ceil(Math.random() * 10000)).toString(16);
                const basename = path.basename(files.file.name);
                const key = imgName + '_' + basename;
                const repath = 'public/upload/' + key;
                fs.rename(files.file.path, repath);
                let putPolicy = new qiniu.rs.PutPolicy(bucket + ':' + key);
                const token = putPolicy.token();
                uploadFile(token.toString(), key, repath, basename);
                fs.unlink(repath);
            });
        } catch (err) {
            console.log('上传七牛失败-->', err);
            fs.unlink(repath);
            res.send({
                success: false,
                desc: '上传失败'
            });
        }
    }

    // uploadHandle(req, res, next) {
    //     // console.log(req.file);
    //     let uploadDir = 'public/img/article/';

    //     const storage = multer.diskStorage({
    //         destination: function(req, file, cb) {
    //             cb(null, uploadDir);
    //         },
    //         filename: function(req, file, cb) {
    //             console.log(file);
    //             cb(null, file.originalname);
    //         }
    //     });

    //     const upload = multer({ storage: storage }).any();
    //     upload(req, res, function(err) {
    //         if (err) {
    //             return console.log(err);
    //         }
    //         res.send(req.files[0]);
    //         console.log(req.files[0]);
    //     });
    // }
}

export default new uploadController();
