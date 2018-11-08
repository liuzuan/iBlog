"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get('/', (req, res, next) => {
    res.render('pages/about', {
        active_nav: 'about',
        css: 'about',
        script: 'about'
    });
});
exports.default = router;
//# sourceMappingURL=about.js.map