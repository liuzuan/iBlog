import mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

const articleSchema = new mongoose.Schema({
    // _id: { type: ObjectId, default: new mongoose.Types.ObjectId() },
    title: String,
    alias: String,
    status: { type: Number, default: 1 },
    categoryName: String,
    categoryId: Number,
    isTop: { type: Boolean, default: false },
    content: String,
    createTime: Date,
    modifyTime: { type: Date, default: Date.now }
});

const categorySchema = new mongoose.Schema({
    // id: { type: ObjectId, default: new mongoose.Types.ObjectId() },
    status: { type: Number, default: 1 },
    name: String,
    logo: String,
    link: String,
    articles: { type: ObjectId, ref: 'articleModel' },
    createTime: Date,
    modifyTime: { type: Date, default: Date.now }
});

const articleModel = mongoose.model('articleModel', articleSchema);
const categoryModel = mongoose.model('categoryModel', categorySchema);

export { categoryModel, articleModel };
