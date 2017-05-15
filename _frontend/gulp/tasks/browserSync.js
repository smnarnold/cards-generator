var gulp        = require('gulp');
var browserSync = require('browser-sync');

var browserSyncTask = function() {
  browserSync.init({
      open: false,
      server: {
          baseDir: '../'
      },
  });
};

gulp.task('browserSync', browserSyncTask);
module.exports = browserSyncTask;
