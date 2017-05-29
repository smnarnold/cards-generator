var gulp        = require('gulp');
var runSequence = require('run-sequence');

var defaultTask = function (cb) {
    global.production = false;
    runSequence('csscomb', 'stylesLint', 'styles', 'scriptsLint', 'scripts' + global.bundler, 'watch', cb);
};

gulp.task('default', defaultTask);
module.exports = defaultTask;
