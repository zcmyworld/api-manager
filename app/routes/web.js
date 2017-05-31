let ProjectController = require('./../controllers/Project');

module.exports = function (router) {
  router.get('/project/:projectId', ProjectController.index);

}
