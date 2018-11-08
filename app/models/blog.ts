import * as mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

const articleSchema = new mongoose.Schema(
    {
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
    },
    {
        versionKey: false,
        timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
    }
);

export interface ArticleDocument extends mongoose.Document {
    title: string;
    alias: string;
    dir: any[];
    status: number;
    category: any;
    isTop?: boolean;
    content: string;
    conHtml: string;
    createTime: Date;
    updateTime: Date;
}

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

export interface CategoryDocument extends mongoose.Document {
    status: number;
    index: number;
    name: string;
    logo: string;
    link: string;
    articles: any[];
    createTime: Date;
    updateTime: Date;
}

const articleModel = mongoose.model<ArticleDocument>('articleModel', articleSchema);
const categoryModel = mongoose.model<CategoryDocument>('categoryModel', categorySchema);

export { categoryModel, articleModel };
