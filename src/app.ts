import * as cookieParser from 'cookie-parser';
import * as createError from 'http-errors';
import * as express from 'express';
import * as logger from 'morgan';
import * as debug from 'debug';
import * as path from 'path';
import * as cors from 'cors';
import * as http from 'http';
import conf from './config/';
import db from './mongodb/db';
import router from './routes/';

const app = express();

db();

app.use(
    cors({
        // origin: '*',
        origin: app.get('env') === 'development' ? '*' : '',
        optionsSuccessStatus: 200,
        credentials: true
    })
);

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
router(app);

app.use(function(req, res, next) {
    next(createError(404));
});

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('pages/error', {
        active_nav: 'blog',
        css: 'error',
        active_cate: '',
        allCategories: []
    });
});

debug('iblog:server');

const port = normalizePort(process.env.PORT || conf.port);
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
}

export default app;
