import * as express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('pages/message', {
        active_nav: 'message',
        css: 'message'
    });
});

export default router;
