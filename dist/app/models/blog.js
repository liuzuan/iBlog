"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const articleSchema = new mongoose.Schema({
    title: String,
    alias: String,
    dir: Array,
    status: { type: Number, default: 1 },
    category: { type: ObjectId, ref: 'categoryModel' },
    isTop: { type: Boolean, default: false },
    content: String,
    conHtml: String,
    createTime: { type: Date, default: Date.now },
    updateTime: { type: Date, default: Date.now }
}, {
    versionKey: false,
    timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
});
const categorySchema = new mongoose.Schema({
    status: { type: Number, default: 1 },
    index: Number,
    name: String,
    logo: String,
    link: String,
    articles: [{ type: ObjectId, ref: 'articleModel' }],
    createTime: { type: Date, default: Date.now },
    updateTime: { type: Date, default: Date.now }
}, {
    versionKey: false,
    timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
});
const articleModel = mongoose.model('articleModel', articleSchema);
exports.articleModel = articleModel;
const categoryModel = mongoose.model('categoryModel', categorySchema);
exports.categoryModel = categoryModel;
//# sourceMappingURL=blog.js.map