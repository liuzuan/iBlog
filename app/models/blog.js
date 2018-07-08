import mongoose from 'mongoose';

// const ObjectId = mongoose.Schema.Types.ObjectId;

const articleSchema = new mongoose.Schema({
    // id: { type: ObjectId, default: new mongoose.Types.ObjectId() },
    title: String,
    alias: String,
    status: {type:Number,default:1},
    categoryName: String,
    categoryId: Number,
    isTop: Boolean,
    content: String,
    createTime: Date,
    modifyTime: { type: Date, default: Date.now }
});
articleSchema.index({ id: 1 });

const categorySchema = new mongoose.Schema({
    // id: { type: ObjectId, default: new mongoose.Types.ObjectId() },
    status: {type:Number,default:1},
    name: String,
    logo: String,
    link: String,
    createTime: Date,
    modifyTime: { type: Date, default: Date.now }
});
categorySchema.index({ id: 1 });

const articleModel = mongoose.model('articleModel', articleSchema);
const categoryModel = mongoose.model('categoryModel', categorySchema);

export { categoryModel, articleModel };
