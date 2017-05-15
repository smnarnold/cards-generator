var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence');

var defaultTask = function (cb) {
    global.production = false;
    gulpSequence('csscomb', 'stylesLint', 'styles', 'scriptsLint', 'scripts' + global.bundler, 'watch', cb);
};

gulp.task('default', defaultTask);
module.exports = defaultTask;
