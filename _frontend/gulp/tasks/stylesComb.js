var gulp    = require('gulp');
var csscomb = require('gulp-csscomb');
var path    = require('path');

var paths = {
    src: path.join(global.paths.src, 'scss/**/*.scss'),
    dest: path.join(global.paths.src, 'scss'),
    abstracts: path.join(global.paths.src, 'scss/abstracts/**/*.scss'),
    vendors: path.join(global.paths.src, 'scss/vendors/**/*.scss'),
};

var csscombTask = function () {
    return gulp.src([paths.src, '!' + paths.abstracts, '!' + paths.vendors])
        .pipe(csscomb({config: './.csscomb.json' /*, verbose: true*/}))
        .pipe(gulp.dest(paths.dest));
};

gulp.task('csscomb', csscombTask);
module.exports = csscombTask;