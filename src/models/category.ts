import * as mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

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

export interface ICategoryDocument extends mongoose.Document {
    status: number;
    index: number;
    name: string;
    logo: string;
    link: string;
    articles: any[];
    createTime: Date;
    updateTime: Date;
}
categorySchema.set('toObject', { getters: true });

const categoryModel = mongoose.model<ICategoryDocument>('categoryModel', categorySchema);

export default categoryModel;
