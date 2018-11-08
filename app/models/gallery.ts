import * as mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

const gallerySchema = new mongoose.Schema(
    {
        title: { type: String, require: true },
        desc: String,
        thumbnail: String,
        full: { type: String, require: true },
        createTime: { type: Date, default: Date.now },
        updateTime: { type: Date, default: Date.now }
    },
    {
        versionKey: false,
        timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
    }
);

const galleryModel = mongoose.model('galleryModel', gallerySchema);

export default galleryModel;
