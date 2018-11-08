"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const config_1 = require("../config");
const chalk_1 = require("chalk");
const client = redis_1.default.createClient(config_1.default.redis.port, config_1.default.redis.host, config_1.default.redis.opts);
client.on('connect', () => {
    console.log(chalk_1.default.green('connected to redis'));
});
client.on('error', err => {
    console.error(chalk_1.default.red(`Error: ${err}`));
});
exports.default = client;
//# sourceMappingURL=redisClient.js.map