const Router = require('koa-router');
const router = new Router();

const Feedback = require('../../api/Feedback');

router.get('/', async (ctx) => {
  try {
    const result = await Feedback.getFeedbackList();

    ctx.status = 200;
    ctx.body = result;
  } catch (error) {
    ctx.status = 500;
    ctx.body = error.message || 'Internal Error';
  }
})

router.post('/add', async (ctx) => {
  try {
    const result = await Feedback.addFeedbackItem({ ...ctx.request.body });
    console.log('result in router', result);
    ctx.status = 201;
    ctx.body = result;
  } catch (err) {
    ctx.status = 500;
    ctx.body = {
			message: 'Not enougth money for feedback',
			error: err
		}
  }
});

module.exports = router;