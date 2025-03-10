const Router = require('koa-router');
const router = new Router();

const Events = require('../../api/Events');

router.post('/events/', async (ctx) => {
  try {
    const result = await Events.addEvent({ ...ctx.request.body });
    ctx.status = 201;
    ctx.body = result;
  } catch (err) {
    console.error('error', err);
    ctx.status = 500;
    ctx.body = 'Not enougth money for that';
  }
});

router.get('/events', async (ctx) => {
  try {
    const result = await Events.getEvents();

    ctx.status = 200;
    ctx.body = result;
  } catch (error) {
    ctx.status = 500;
    ctx.body = error.message || 'Internal Error';
  }
})

module.exports = router;