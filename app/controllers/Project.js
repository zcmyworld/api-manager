class Project {

  async show(ctx) {
    ctx.body = [{
      method: 'POST',
      route: '/pet',
      des: 'sdfasdjflkasdjflk',
      reqHead: {
        'Cache-Control': 'no-cache'
      },
      reqBody: {
        hello: 1
      },
      resHead: {
        'Cache-Control': 'no-cache'
      },
      resBody: [
        {
          code: 200,
          body: {
            hello: 1
          }
        }, {
          code: 404,
          body: {
            world: 1
          }
        }
      ]
    }]
  }

  async index(ctx) {
    ctx.body = [
      {
        name: '课程工具',
        updated: '2017-1-2 13:24'
      }, {
        name: '用户系统',
        updated: '2017-1-2 13:24'
      }
    ]
  }
}

module.exports = new Project();