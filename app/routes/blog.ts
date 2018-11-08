import express from 'express';
import blog from '../controllers/blog';
const router = express.Router();

router.get('/', blog);
router.get('/article', blog);

export default router;
