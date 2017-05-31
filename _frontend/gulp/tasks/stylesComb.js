var gulp    = require('gulp');
var csscomb = require('gulp-csscomb');
var path    = require('path');

var paths = {
    src: path.join(global.paths.assets.src, 'scss/!(abstracts|vendors)/**/*.scss'),
    dest: path.join(global.paths.assets.src, 'scss'),
};

var csscombTask = function () {
    return gulp.src(paths.src)
        .pipe(csscomb({config: './.csscomb.json' /*, verbose: true*/}))
        .pipe(gulp.dest(paths.dest));
};

gulp.task('csscomb', csscombTask);
module.exports = csscombTask;