"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Utils {
    formatDate(date) {
        return new date(date).getTime() / 1000;
    }
}
exports.default = new Utils();
//# sourceMappingURL=index.js.map