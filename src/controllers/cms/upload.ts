import * as formidable from 'formidable';
import * as fs from 'fs';
import * as qiniu from 'qiniu';
import { galleryModel } from '../../models';
import config from '../../config';

const { ACCESS_KEY, SECRET_KEY } = config.qiniuConf;

qiniu.conf.ACCESS_KEY = ACCESS_KEY;
qiniu.conf.SECRET_KEY = SECRET_KEY;

export default async (req, res, next) => {
	try {
		const form = new formidable.IncomingForm();
		const bucket = 'liuzuanncdn';
		form.uploadDir = 'public/upload/';
		form.keepExtensions = true;
		form.maxFieldsSize = 5 * 1024 * 1024;
		const uploadFile = (uptoken, key, localFile, title) => {
			const extra = new qiniu.io.PutExtra();
			qiniu.io.putFile(uptoken, key, localFile, extra, async (err, ret) => {
				const url = 'http://cdn.liuzuann.com/' + ret.key;
				if (req.query && req.query.dir === 'gallery') {
					const img = new galleryModel({
						title: title.slice(0, title.indexOf('.')),
						thumbnail: url + '-thumb',
						full: url + '-thin'
					});
					await img.save();
				}
				res.send({
					success: true,
					name: ret.key,
					url: url + '-thin'
				});
			});
		};
		form.parse(req, async (err, fields, files) => {
			const uniqueName = (new Date().getTime() + Math.ceil(Math.random() * 10000)).toString(16);
			const originalname = files.file.name;
			const key =
				(req.query && req.query.dir ? `images/${req.query.dir}/` : 'images/other/') + uniqueName + '__' + originalname;
			const repath = 'public/upload/' + originalname;
			fs.renameSync(files.file.path, repath);
			let putPolicy = new qiniu.rs.PutPolicy(bucket + ':' + key);
			const token = putPolicy.token();
			uploadFile(token.toString(), key, repath, originalname);
			fs.unlinkSync(repath);
		});
	} catch (err) {
		console.log('上传七牛失败-->', err);
		res.send({
			success: false,
			desc: '上传失败'
		});
	}
};
