import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('pages/about', {
        active_nav: 'about',
        css: 'about',
        script: 'about'
    });
});

export default router;
