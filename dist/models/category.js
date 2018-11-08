"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
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
const categoryModel = mongoose.model('categoryModel', categorySchema);
exports.default = categoryModel;
//# sourceMappingURL=category.js.map