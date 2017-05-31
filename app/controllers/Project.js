class Project {

  async index(ctx) {
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

}

module.exports = new Project();