let ProjectController = require('./../controllers/Project');

module.exports = function (router) {

  router.get('/projects', ProjectController.index);
  router.get('/projects/:projectId', ProjectController.show);
  router.get('/projects_menu', ProjectController.menu);

}
