import express from 'express';
import gallery from '../controllers/gallery';

const router = express.Router();

router.get('/', gallery.page);

export default router;
