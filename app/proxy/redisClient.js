import redis from 'redis';
import conf from '../../config/';

const client = redis.createClient(conf.redis.port, config.redis.host, config.redis.opts);

client.on('connect', () => {
    console.log(chalk.green('connected to redis'));
});
client.on('error', err => {
    console.error(chalk.red(`Error: ${err}`));
});
export default client;
