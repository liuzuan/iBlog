"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const routes_1 = require("./app/routes/");
const db_1 = require("./app/mongodb/db");
const cors = require("cors");
const app = express();
db_1.default();
app.use(cors({
    // origin: '*',
    origin: app.get('env') === 'development' ? '*' : '',
    optionsSuccessStatus: 200,
    credentials: true
}));
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
routes_1.default(app);
app.use(function (req, res, next) {
    next(createError(404));
});
app.use(function (err, req, res, next) {
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
exports.default = app;
//# sourceMappingURL=app.js.map