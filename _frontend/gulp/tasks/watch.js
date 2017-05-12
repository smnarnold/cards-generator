var gulp         = require('gulp');
var path         = require('path');
var watch        = require('gulp-watch');
var gulpSequence = require('gulp-sequence');
var browserSync  = require('browser-sync').create();
var reload       = browserSync.reload;

var watchTask = function () {
    var fileTypes = [
        {
            folder: 'js',
            tasks: ['scriptsLint', 'scripts', 'reload'],
            extensions: ['js']
        },
        {
            folder: 'scss',
            tasks: ['stylesLint', 'styles'],
            extensions: ['scss']
        }
    ];

    fileTypes.forEach(function (fileType) {
        var glob = path.join(global.paths.src, fileType.folder, '**/*.{' + fileType.extensions.join(',') + '}');

        watch([glob, '!**/*___jb_tmp___'], function () {
            gulpSequence.apply(this, fileType.tasks)(function (err) {
                if (err) console.log(err);
            });
        }).on('change', reload);
    })
};

gulp.task('watch', ['browserSync'], watchTask);
module.exports = watchTask;
