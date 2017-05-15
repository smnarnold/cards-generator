var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var gulpSequence = require('gulp-sequence');
var path         = require('path');
var reload       = browserSync.reload;
var watch        = require('gulp-watch');

var watchTask = function () {
    var fileTypes = [
        {
            folder: 'scss',
            tasks: ['stylesLint', 'styles'],
            extensions: ['scss']
        }
    ];

    // add js files only for webpack (browserify is setup with watchify)
    if (global.bundler === 'Webpack') {
        fileTypes.push({
            folder: 'js',
            tasks: ['scriptsLint', 'scripts', 'reload'],
            extensions: ['js'],
        });
    }

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
