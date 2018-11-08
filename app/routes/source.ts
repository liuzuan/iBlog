import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('pages/source', {
        active_nav: 'source',
        css: 'source'
    });
});

export default router;
 