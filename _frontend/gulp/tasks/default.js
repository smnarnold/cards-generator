var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence');

global.production = false;
global.paths = {
    src: './src',
    dest: '../assets',
};

var defaultTask = function (cb) {
    gulpSequence('csscomb', 'stylesLint', 'styles', 'scriptsLint', 'scripts', 'watch', cb);
};

gulp.task('default', defaultTask);
module.exports = defaultTask;
