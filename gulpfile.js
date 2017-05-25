let fs = require('fs');
let path = require('path');

// 任务文件路径
let tasksPath = path.join(__dirname, 'gulp/tasks');

let gulp = require('gulp');

let tasks = (function () {
  let _tasks = [];
  fs.readdirSync(tasksPath)
    .forEach((file) => {
      let taskName = file.substring(0, file.indexOf('.js'));
      let task = require(path.join(tasksPath, file))(gulp);
      gulp.task(taskName, task);
      _tasks.push(taskName);
    });
  return _tasks;
})();

gulp.task('default', tasks);