"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blog_1 = require("./blog");
const cms_1 = require("./cms");
const source_1 = require("./source");
const gallery_1 = require("./gallery");
const message_1 = require("./message");
const about_1 = require("./about");
exports.default = app => {
    app.use('/', blog_1.default);
    app.use('/cms', cms_1.default);
    app.use('/source', source_1.default);
    app.use('/gallery', gallery_1.default);
    app.use('/message', message_1.default);
    app.use('/about', about_1.default);
};
//# sourceMappingURL=index.js.map