const Router = require('koa-router');
const router = new Router();

const Feedback = require('../../api/Feedback')

router.delete('/:id/delete', async (ctx) => {
  try {
    const result = await Feedback.deleteFeedbackItem(ctx.params.id)

    ctx.status = 201
    ctx.body = result
  } catch (err) {
    ctx.status = 500
    ctx.body = {
      message: 'Cant delete post'
    }
  }
})

module.exports = router;