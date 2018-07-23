import multer from 'multer';

class uploadController {
    uploadHandle(req, res, next) {
        // console.log(req.file);
        let uploadDir = 'public/images/article/';

        const storage = multer.diskStorage({
            destination: function(req, file, cb) {
                cb(null, uploadDir);
            },
            filename: function(req, file, cb) {
                console.log(file);
                cb(null, file.originalname);
            }
        });

        const upload = multer({ storage: storage }).any();
        upload(req, res, function(err) {
            if (err) {
                return console.log(err);
            }
            res.send(req.files[0]);
            console.log(req.files[0]);
        });
    }
}

export default new uploadController();
