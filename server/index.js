const Koa = require('koa');
const koaBody = require('koa-body');
const koaCors = require('koa-cors');
const serve = require('koa-static');
const multer = require('koa-multer');
const jwt = require('koa-jwt');
const errors = require('./middleware/errorHandlers');


const PORT = 8009

require('./db');

const router = require('./routes');

const app = new Koa();

app.use(serve('storage'));
// app.user( errors)
app.use(koaBody());
app.use(koaCors());
app.use(router.routes());
app.use(router.allowedMethods());

// Unprotected middleware
// app.use(function (ctx, next) {
//   if (ctx.url.match(/^\/public/)) {
//     ctx.body = 'unprotected\n';
//   } else {
//     return next();
//   }
// });

// Middleware below this line is only reached if JWT token is valid
// app.use(jwt({ secret: 'b1afba87eaf901d04ef5bae77c0050f6' }));
// Protected middleware
// app.use(function (ctx) {
//   if (ctx.url.match(/^\/api/)) {
//     ctx.body = 'protected\n';
//   }
// });
app.listen(PORT, () => {
  console.log(`✅ Server succesfully running on port ${PORT}`);
})