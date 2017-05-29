var gulp        = require('gulp');
var runSequence = require('run-sequence');

var productionTask = function (cb) {
    global.production = true;
    runSequence('csscomb', 'stylesLint', 'styles', 'scriptsLint', 'scripts' + global.bundler, cb);
};

gulp.task('production', productionTask);
module.exports = productionTask;
