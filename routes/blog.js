import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index/index', {
        active_nav: 'blog',
        sidebar: ['javascript', 'html', 'css', 'php', 'nodejs']
    });
});

export default router;
