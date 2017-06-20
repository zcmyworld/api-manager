let Koa = require('koa');
let app = new Koa();

let cors = require('koa-cors');

let bodyParser = require('koa-bodyparser');

let router = require('koa-router')({});

let path = require('path');

let APP_PATH = __dirname;


let routerHandler = require('./app/routes/web')

app.use(cors());

app.use(bodyParser());

app.use(async function (ctx, next) {
  let httpMethod = ctx.request.method;
  let url = ctx.request.url;
  let mockUrl = url.slice(url.indexOf('/mock') + '/mock'.length, url.length);
  let config = {
    header: [{
      arg: 'token',
      des: '获取成功的令牌',
    }],
    body: [
      {
        name: '项目１',
        updated: '2017-3-2 13:12'
      }, {
        name: '项目２',
        updated: '2017-3-2 13:12'
      }
    ]
  }
  ctx.set = {
    'arg': 'hello'
  }

  ctx.body = config.body;

  await next();
});

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

