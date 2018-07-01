import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('pages/index', {
        active_nav: 'message',
    });
});

export default router;
