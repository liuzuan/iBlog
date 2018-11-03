import mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema(
    {
        is_manager: { type: Number, default: 0 },
        userName: { type: String, unique: true, required: true, trim: true },
        password: { type: String, required: true },
        createTime: { type: Date, default: Date.now },
        lastLoginTime: { type: Date, default: Date.now },
        avatar_url: { type: String, default: 'http://cdn.liuzuann.com/1651f482b48_IMG_3231.JPG' }
    },
    {
        versionKey: false,
        timestamps: { createdAt: 'createTime', updatedAt: 'lastLoginTime' }
    }
);

const user = mongoose.model('userModel', userSchema);

export default user;
