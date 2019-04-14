import redis from 'redis';
import chalk from 'chalk';
const conf = require('config-lite')(__dirname);

const client = redis.createClient(conf.redis.port, conf.redis.host, conf.redis.opts);

client.on('connect', () => {
    console.log(chalk.green('connected to redis'));
});
client.on('error', err => {
    console.error(chalk.red(`Error: ${err}`));
});
export default client;
