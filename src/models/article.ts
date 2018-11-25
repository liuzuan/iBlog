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

export interface IArticleDocument extends mongoose.Document {
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
articleSchema.set('toObject', { getters: true });
const articleModel = mongoose.model<IArticleDocument>('articleModel', articleSchema);

export default articleModel;
