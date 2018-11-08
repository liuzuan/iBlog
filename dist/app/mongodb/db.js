"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const chalk_1 = require("chalk");
const config_1 = require("../../config/");
exports.default = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(config_1.default.dbURL, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.once('open', () => {
        console.log(chalk_1.default.green('连接数据库成功'));
    });
    db.on('error', error => {
        console.error(chalk_1.default.red('Error in MongoDb connection: ' + error));
        mongoose.disconnect();
    });
    db.on('close', () => {
        console.log(chalk_1.default.red('数据库断开，重新连接数据库...'));
        mongoose.connect(config_1.default.dbURL);
    });
};
//# sourceMappingURL=db.js.map