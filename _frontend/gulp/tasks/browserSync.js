var browserSync       = require('browser-sync');
var gulp              = require('gulp');

var browserSyncTask = function() {
  browserSync.init({
      "open": false,
      "server": {
          "baseDir": "../"
      }
  });
};

gulp.task('browserSync', browserSyncTask);
module.exports = browserSyncTask;
