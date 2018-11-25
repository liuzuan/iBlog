"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const userSchema = new mongoose.Schema({
    is_manager: { type: Number, default: 0 },
    userName: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true },
    createTime: { type: Date, default: Date.now },
    lastLoginTime: { type: Date, default: Date.now },
    avatar_url: { type: String, default: '//cdn.liuzuann.com/1651f482b48_IMG_3231.JPG' }
}, {
    versionKey: false,
    timestamps: { createdAt: 'createTime', updatedAt: 'lastLoginTime' }
});
class UserClass extends mongoose.Model {
    static updateUser(conditions, update) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.findOneAndUpdate(conditions, update)
                .select({ password: 0 })
                .setOptions({ lean: true });
        });
    }
}
userSchema.set('toObject', { getters: true });
userSchema.loadClass(UserClass);
const userModel = mongoose.model('userModel', userSchema);
exports.default = userModel;
//# sourceMappingURL=user.js.map