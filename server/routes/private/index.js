const Router = require('koa-router');
const router = new Router();

const calendar = require('./calendar');
const upload = require('./upload');
const feedback = require('./feedback');
const galery = require('./galery');
const galeryImg = require('./galeryImg');

// /private/calendar
router.use('/calendar', calendar.routes());
router.use('/upload', upload.routes());
router.use('/feedback', feedback.routes());
router.use('/galery', galery.routes());
router.use('/galery-img', galeryImg.routes());

module.exports = router;
