class Project {

  async show(ctx) {
    let projectId = ctx.params.projectId;
    ctx.body = {
      title: '项目列表',
      method: 'GET',
      route: '/projects',
      des: '获取项目列表',
      reqHead: [
        {
          arg: 'custom-lang',
          des: '客户端当前的语言',
          defVal: 'zh'
        },
        {
          arg: 'custom-id',
          des: '用户id',
          defVal: '-'
        }
      ],
      reqBody: [{
        arg: 'projectId',
        des: '项目id',
        type: 'string',
        defVal: '-',
        optional: '必填'
      }],
      res: [
        {
          type: '正确返回',
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
        },
        {
          type: '错误返回',
          header: [{
            arg: 'token',
            des: '获取成功的令牌',
          }],
          body: {
            error: 'error projectId'
          }
        }
      ]
    }
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

  async menu(ctx) {
    ctx.body = [
      {
        name: '项目模块',
        childs: [
          {
            name: '项目列表',
          },
          {
            name: '项目信息'
          }
        ]
      },
      {
        name: '用户模块',
        childs: [
          {
            name: '用户列表'
          },
          {
            name: '用户信息'
          }
        ]
      }
    ]
  }
}

module.exports = new Project();