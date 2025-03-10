const Router = require('koa-router');

const publicRouter = require('./public');
const privateRouter = require('./private')

const router = new Router();


router.use('/public', publicRouter.routes());
router.use('/private', privateRouter.routes());

module.exports = router;

