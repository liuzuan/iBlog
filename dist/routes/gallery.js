"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const gallery_1 = require("../controllers/gallery");
const router = express.Router();
router.get('/', gallery_1.default.page);
exports.default = router;
//# sourceMappingURL=gallery.js.map