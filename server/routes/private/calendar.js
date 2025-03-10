const Router = require('koa-router');
const router = new Router();

const Calendar = require('../../api/Calendar');

// /private/calendar/add
router.post('/add', async (ctx) => {
  try {
    const result = await Calendar.addEvent({ ...ctx.request.body });
    ctx.status = 201;
    ctx.body = result;
  } catch (err) {
    ctx.status = 500;
    ctx.body = {
      message: 'Cant create calendar post',
      error: err
    }
  }
});

router.post('/update/:id', async (ctx) => {
  try {
    // const editingPost = await Calendar.getEvent(ctx.params.id);
    const updatedPost = await Calendar.editCalendarPost(ctx.request.body);

    ctx.status = 200;
    ctx.body = updatedPost;
  } catch (err) {
    ctx.status = 500;
    ctx.body = {
      message: 'Не получается изменить пост календаря',
      error: err
    }
  }
});

router.delete('/:id', async (ctx) => {
  try {
    const result = await Calendar.deleteEvent( ctx.params.id );

    ctx.status = 201;
    ctx.body = result;
  } catch (err) {

    ctx.status = 500;
    ctx.body = {
      message: 'Cant delete post'
    }
  }
});

module.exports = router;