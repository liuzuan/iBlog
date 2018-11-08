"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get('/', (req, res, next) => {
    res.render('pages/source', {
        active_nav: 'source',
        css: 'source'
    });
});
exports.default = router;
//# sourceMappingURL=source.js.map