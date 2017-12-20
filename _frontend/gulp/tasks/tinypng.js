var gulp    = require('gulp');
var path    = require('path');
var tinypng = require('gulp-tinypng-compress');

var paths = {
    src: path.join(global.paths.assets.src, 'img/**/*.{png,jpg,jpeg}'),
    dest: path.join(global.paths.assets.dest, 'img'),
};

var tinypngTask = function () {
    return gulp.src(paths.src)
        .pipe(tinypng({
            force: false,
            ignore: false,
            key: 'YdAop9T7SOwoyGawdnmQU0YepgZAVMtH',
            log: true,
            parallel: true,
            parallelMax: 4,
            sameDest: false,
            sigFile: 'images/.tinypng-sigs',
            summarize: true,
        }))
        .pipe(gulp.dest(paths.dest));
};

gulp.task('tinypng', tinypngTask);
module.exports = tinypngTask;
