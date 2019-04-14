import * as mongoose from 'mongoose';
import chalk from 'chalk';

const conf = require('config-lite')(__dirname);

export default () => {
	(<any>mongoose).Promise = global.Promise;
	mongoose.connect(conf.dbURL, { useNewUrlParser: true, useCreateIndex: true });

	const db = mongoose.connection;

	db.once('open', () => {
		console.log(chalk.green('连接数据库成功'));
	});

	db.on('error', error => {
		console.error(chalk.red('Error in MongoDb connection: ' + error));
		mongoose.disconnect();
	});

	db.on('close', () => {
		console.log(chalk.red('数据库断开，重新连接数据库...'));
		mongoose.connect(conf.dbURL);
	});
};
