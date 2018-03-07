const gulp        = require('gulp');
const runSequence = require('run-sequence');

let productionTask = function (cb) {
  global.production = true;
  runSequence('stylesComb', 'stylesLint', 'styles', 'scriptsLint', 'scripts' + global.bundler, 'cacheBreaker', cb);
};

gulp.task('production', productionTask);
module.exports = productionTask;
