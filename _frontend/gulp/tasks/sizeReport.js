var gulp       = require('gulp');
var sizereport = require('gulp-sizereport');
var path       = require('path');

var paths = {
    src: path.join(global.paths.assets.dest, '**/*'),
};

var sizeReportTask = function () {
    return gulp.src(paths.src)
        .pipe(sizereport({
            gzip: true
        }));
};

gulp.task('sizeReport', sizeReportTask);
module.exports = sizeReportTask;