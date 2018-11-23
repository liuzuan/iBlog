import * as mongoose from 'mongoose';

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

interface IUserDocument extends mongoose.Document {
    is_manager: number;
    userName: string;
    password: string;
    createTime: Date;
    lastLoginTime: Date;
    avatar_url: string;
    token?: string;
}

class UserClass extends mongoose.Model {
    public static async updateUser(conditions, update) {
        return await this.findOneAndUpdate(conditions, update)
            .select({ password: 0 })
            .setOptions({ lean: true });
    }
    
}

userSchema.loadClass(UserClass);

const userModel = mongoose.model<IUserDocument>('userModel', userSchema);

export default userModel;
