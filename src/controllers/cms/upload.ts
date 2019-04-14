import * as formidable from 'formidable';
import * as fs from 'fs';
import * as qiniu from 'qiniu';
import { galleryModel } from '../../models';
const config = require('config-lite')(__dirname);

const { ACCESS_KEY, SECRET_KEY } = config.qiniuConf;
const bucket = 'liuzuanncdn';
const mac = new qiniu.auth.digest.Mac(ACCESS_KEY, SECRET_KEY);

var formUploader = new qiniu.form_up.FormUploader({
	useHttpsDomain: true,
	useCdnDomain: true
});

export default async (req, res, next) => {
	try {
		const form = new formidable.IncomingForm();
		form.uploadDir = 'public/upload/';
		form.keepExtensions = true;
		form.maxFieldsSize = 5 * 1024 * 1024;
		const uploadFile = (uptoken, key, localFile, title) => {
			const extra = new qiniu.form_up.PutExtra();
			formUploader.putFile(uptoken, key, localFile, extra, async (err, ret) => {
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
			var options = {
				scope: bucket + ':' + key
			};
			const putPolicy = new qiniu.rs.PutPolicy(options);
			const token = putPolicy.uploadToken(mac);
			uploadFile(token, key, repath, originalname);
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
