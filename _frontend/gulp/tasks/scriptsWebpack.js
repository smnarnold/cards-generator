var gulp          = require('gulp');
var browserSync   = require('browser-sync');
var gulpif        = require('gulp-if');
var handleErrors  = require('../lib/handleErrors');
var path          = require('path');
var sizereport    = require('gulp-sizereport');
var webpack       = require('webpack');
var webpackStream = require('webpack-stream');

var paths = {
  src: path.join(global.paths.assets.src, 'js/boot.js'),
  dest: path.join(global.paths.assets.dest, 'js'),
};

var scriptsWebpackTask = function () {
  return gulp.src(paths.src)
    .on('error', handleErrors)
    .pipe(webpackStream({
      devtool: global.production ? false : 'inline-source-map',
      externals: {
        jquery: 'jQuery'
      },
      mode: global.production ? 'production' : 'development',
      module: {
        rules: [
          {
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: {
              presets: 'env', // babel env preset
            },
            test: /\.js$/,
          },
        ]
      },
      plugins: [
        new webpack.LoaderOptionsPlugin({
          debug: false,
          minimize: true,
        }),
      ],
      output: {filename: 'boot.js'}
    }, webpack))
    .pipe(sizereport({gzip: true, total: false}))
    .pipe(gulp.dest(paths.dest))
    .pipe(gulpif(!global.production, browserSync.stream()));
};

gulp.task('scriptsWebpack', scriptsWebpackTask);
module.exports = scriptsWebpackTask;
