var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence');

var productionTask = function (cb) {
    global.production = true;
    gulpSequence('csscomb', 'stylesLint', 'styles', 'scriptsLint', 'scripts' + global.bundler, cb);
};

gulp.task('production', productionTask);
module.exports = productionTask;
