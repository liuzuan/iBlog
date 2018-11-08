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
const models_1 = require("../../models/");
class GalleryController {
    page(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield models_1.galleryModel.find();
                res.render('pages/gallery', {
                    active_nav: 'gallery',
                    css: 'gallery',
                    imgLists: result
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new GalleryController();
//# sourceMappingURL=index.js.map