let should = require('should');
let superagent = require('supertest');
let app = require('../../app');

function request() {
  return superagent(app.listen())
}

describe('project test start ..', function () {

  before(function () {

  });

  beforeEach(async function () {

  });

  afterEach(async function () {

  });

  after(function () {

  });

  describe('project info', function () {
    it('return correct', function (done) {
      request(app)
        .get('/project/1')
        .expect(200, (err, res) => {
          console.log(res.body)
          done();
        })
    })
  });
});