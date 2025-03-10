const Router = require('koa-router');
const router = new Router();

const GaleryImg = require('../../api/GaleryImg');

// /private/galery/add
router.post('/add', async (ctx) => {
  try {
    const result = await GaleryImg.addEvent({ ...ctx.request.body });
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
    // const editingPost = await GaleryImg.getEvent(ctx.params.id);
    const updatedPost = await GaleryImg.editGaleryPost(ctx.request.body);

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
    const result = await GaleryImg.deleteEvent( ctx.params.id );

    ctx.status = 201;
    ctx.body = result;
  } catch (err) {

    ctx.status = 500;
    ctx.body = {
      message: 'Не получается удалить галерею'
    }
  }
})

module.exports = router;