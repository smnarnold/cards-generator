var gulp       = require('gulp');
var sizereport = require('gulp-sizereport');
var path       = require('path');

var paths = {
    dest: path.join(global.paths.dest, '**/*'),
};

var sizeReportTask = function () {
    return gulp.src(paths.dest)
        .pipe(sizereport({
            gzip: true
        }));
};

gulp.task('sizeReport', sizeReportTask);
module.exports = sizeReportTask;