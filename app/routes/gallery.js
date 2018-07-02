import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('pages/gallery', {
        active_nav: 'gallery',
    });
});

export default router;
