const Router = require('koa-router');
const auth = require('./auth')
const calendar = require('./calendar')
const events = require('./events')
const feedback = require('./feedback')

const router = new Router();

router.use('/auth', auth.routes());
router.use('/calendar', calendar.routes());
router.use('/events', events.routes());
router.use('/feedback', feedback.routes());


module.exports = router;
