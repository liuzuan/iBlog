import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index/index', {
        sidebar: ['javascript', 'html', 'css', 'php', 'nodejs']
    });
});

export default router;
