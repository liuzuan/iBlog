// import multer from 'multer';
import qiniu from 'qiniu';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
qiniu.conf.ACCESS_KEY = 'HWBhm1kwS_YY-bHTR9Cl2gWr20eSks14PhIaTqP7';
qiniu.conf.SECRET_KEY = 'lveC7RDx27R7NzTMtBNM3BxYKbsPao-j8sPnF7KT';
class uploadController {
    uploadToCdn(req, res, next) {
        try {
            const form = formidable.IncomingForm();
            const bucket = 'liuzuanncdn';
            form.uploadDir = 'public/upload/';
            form.keepExtensions = true;
            function uploadFile(uptoken, key, localFile) {
                let extra = new qiniu.io.PutExtra();
                qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
                    res.send({
                        success: true,
                        url: 'http:cdn.liuzuann.com/' + ret.key
                    });
                });
            }
            form.parse(req, (err, fields, files) => {
                const imgName = (new Date().getTime() + Math.ceil(Math.random() * 10000)).toString(16);
                const basename = path.basename(files.file.name);
                const repath = 'public/upload/' + imgName + basename;
                const key = imgName + '_' + basename;
                fs.rename(files.file.path, repath);
                let putPolicy = new qiniu.rs.PutPolicy(bucket + ':' + key);
                const token = putPolicy.token();
                uploadFile(token.toString(), key, repath);
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
