let Koa = require('koa');
let app = new Koa();

let bodyParser = require('koa-bodyparser');

let router = require('koa-router')({});

let path = require('path');

let APP_PATH = __dirname;


let routerHandler = require('./app/routes/web')

app.use(bodyParser());

// let custom_config = {
//   method: 'get',
//   body: {
//     hello: 1
//   },
//   result: {
//     hello: {

//     }
//   },
//   route: '/test/:testId'
// }

// let custom_route = "/test/hello/world"

// setTimeout(function () {
//   router[custom_config.method](custom_config.route, async function (ctx) {
//     ctx.body = custom_config.result;
//   })
// }, 3000)

routerHandler(router);


app
  .use(router.routes())
  .use(router.allowedMethods());


if (module.parent) {
  module.exports = app;
} else {
  app.listen(3001);
}

