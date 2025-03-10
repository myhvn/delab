const Router = require('koa-router');
const router = new Router();

const Galery = require('../../api/Galery');

// /private/galery/add
router.post('/add', async (ctx) => {
  try {
    const result = await Galery.addEvent({ ...ctx.request.body });
    ctx.status = 201;
    ctx.body = result;
  } catch (err) {
    ctx.status = 500;
    ctx.body = {
      message: 'Не получается создать галерею',
      error: err
    }
  }
});

router.post('/update/:id', async (ctx) => {
  try {
    // const editingPost = await Galery.getEvent(ctx.params.id);
    const updatedPost = await Galery.editGaleryPost(ctx.request.body);

    ctx.status = 200;
    ctx.body = updatedPost;
  } catch (err) {
    ctx.status = 500;
    ctx.body = {
      message: 'Не получается изменить название галереи',
      error: err
    }
  }
});

router.delete('/:id', async (ctx) => {
  try {
    const result = await Galery.deleteEvent( ctx.params.id );

    ctx.status = 201;
    ctx.body = result;
  } catch (err) {

    ctx.status = 500;
    ctx.body = {
      message: 'Не получается удалить галерею'
    }
  }
});

router.delete('/img/:id', async (ctx) => {
  try {
    const result = await Galery.deleteEvent( ctx.params.id );

    ctx.status = 201;
    ctx.body = result;
  } catch (err) {

    ctx.status = 500;
    ctx.body = {
      message: 'Не получается удалить картинку'
    }
  }
});

module.exports = router;