"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const blog_1 = require("../controllers/blog");
const router = express.Router();
router.get('/', blog_1.default);
router.get('/article', blog_1.default);
exports.default = router;
//# sourceMappingURL=blog.js.map