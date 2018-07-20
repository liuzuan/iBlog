import mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

const articleSchema = new mongoose.Schema(
    {
        title: String,
        alias: String,
        status: { type: Number, default: 1 },
        categoryName: String,
        category: {type: ObjectId, ref: 'categoryModel'},
        isTop: { type: Boolean, default: false },
        content: String,
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

const userSchema = new mongoose.Schema({
    is_manager: {type:Number, default:0},
    userName: {type: String, required: true},
    password: {type: String, required: true},
    avatar_url: {type: String, default: 'https://avatars3.githubusercontent.com/u/33034834?v=4&s=120'}
})

const articleModel = mongoose.model('articleModel', articleSchema);
const categoryModel = mongoose.model('categoryModel', categorySchema);
const userModel = mongoose.model('userModel', userSchema);

export { categoryModel, articleModel, userModel };
