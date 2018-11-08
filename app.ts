import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import router from './app/routes/index';
import db from './app/mongodb/db';
import cors from 'cors';

const app = express();

app.use(
    cors({
        // origin: '*',
        origin: app.get('env') === 'development' ? '*' : '',
        optionsSuccessStatus: 200,
        credentials: true
    })
);

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
router(app);

app.use(function(req, res, next) {
    next(createError(404));
});

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('pages/error',{
        active_nav: 'blog',
        css: 'error',
        active_cate: '',
        allCategories:[],
    })
});

export default app;
