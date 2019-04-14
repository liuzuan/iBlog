"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const chalk_1 = require("chalk");
const conf = require('config-lite')(__dirname);
const client = redis_1.default.createClient(conf.redis.port, conf.redis.host, conf.redis.opts);
client.on('connect', () => {
    console.log(chalk_1.default.green('connected to redis'));
});
client.on('error', err => {
    console.error(chalk_1.default.red(`Error: ${err}`));
});
exports.default = client;
//# sourceMappingURL=redisClient.js.map