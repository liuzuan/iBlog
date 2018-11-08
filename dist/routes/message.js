"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get('/', (req, res, next) => {
    res.render('pages/message', {
        active_nav: 'message',
        css: 'message'
    });
});
exports.default = router;
//# sourceMappingURL=message.js.map