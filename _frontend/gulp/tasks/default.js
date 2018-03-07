const gulp        = require('gulp');
const runSequence = require('run-sequence');

let defaultTask = function (cb) {
  global.production = false;
  runSequence.options.showErrorStackTrace = false;
  runSequence('stylesComb', 'stylesLint', 'styles', 'scriptsLint', 'scripts' + global.bundler, 'watch', cb);
};

gulp.task('default', defaultTask);
module.exports = defaultTask;
