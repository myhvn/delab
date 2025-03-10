const Router = require('koa-router');
const router = new Router();

const Calendar = require('../../api/Calendar');

router.get('/', async (ctx) => {
  try {
    const result = await Calendar.getEvents();

    ctx.status = 200;
    ctx.body = result;
  } catch (error) {
    ctx.status = 500;
    ctx.body = error.message || 'Internal Error';
  }
})

router.get('/:id', async (ctx) => {
  try {
    const result = await Calendar.getEvent(ctx.params.id);

    ctx.status = 200;
    ctx.body = result;
  } catch (error) {
    ctx.status = 500;
    ctx.body = error.message || 'Internal Error';
  }
})

module.exports = router;