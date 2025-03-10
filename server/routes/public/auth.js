const Router = require('koa-router');
const router = new Router();

const Auth = require('../../api/Auth');

router.post('/register', async (ctx) => {
  try {
    const res = await Auth.register({ ...ctx.request.body });
    ctx.status = 201;
    ctx.body = res;

  } catch (error) {
    ctx.status = 500;
    ctx.body = 'Error!';
  }
});

router.post('/login', async (ctx) => {
  try {
    const res = await Auth.login({ ...ctx.request.body });
    ctx.status = 200;
    ctx.body = res;

  } catch (error) {
    ctx.status = 401;
    ctx.body = error;
  }
});

module.exports = router;