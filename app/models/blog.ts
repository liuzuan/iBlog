import mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

const articleSchema = new mongoose.Schema(
    {
        title: { type: String },
        alias: String,
        dir: Array,
        status: { type: Number, default: 1 },
        category: { type: ObjectId, ref: 'categoryModel' },
        isTop: { type: Boolean, default: false },
        content: String,
        conHtml: String,
        createTime: { type: Date, default: Date.now },
        updateTime: { type: Date, default: Date.now }
    },
    {
        versionKey: false,
        timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
    }
);

const categorySchema = new mongoose.Schema(
    {
        status: { type: Number, default: 1 },
        index: Number,
        name: String,
        logo: String,
        link: String,
        articles: [{ type: ObjectId, ref: 'articleModel' }],
        createTime: { type: Date, default: Date.now },
        updateTime: { type: Date, default: Date.now }
    },
    {
        versionKey: false,
        timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
    }
);


const articleModel = mongoose.model('articleModel', articleSchema);
const categoryModel = mongoose.model('categoryModel', categorySchema);

export { categoryModel, articleModel};
