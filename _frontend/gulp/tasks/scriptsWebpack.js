var gulp          = require('gulp');
var browserSync   = require('browser-sync');
var handleErrors  = require('../lib/handleErrors');
var path          = require('path');
var sizereport    = require('gulp-sizereport');
var webpack       = require('webpack');
var webpackStream = require('webpack-stream');

var paths = {
    src: path.join(global.paths.src, 'js/boot.js'),
    dest: path.join(global.paths.dest, 'js'),
};

var scriptsWebpackTask = function () {
    return gulp.src(paths.src)
        .on('error', handleErrors)
        .pipe(webpackStream({
            devtool: global.production ? '' : 'inline-source-map',
            module: {
                rules: [
                    {
                        exclude: /(node_modules|bower_components)/,
                        loader: 'babel-loader',
                        query: {
                            presets: 'es2015'
                        },
                        test: /\.js$/,
                    }
                ]
            },
            plugins: [
                new webpack.LoaderOptionsPlugin({
                    minimize: true,
                    debug: false
                }),
                new webpack.optimize.UglifyJsPlugin({
                    compress: true,
                    sourceMap: !global.production
                }),
            ],
            output: {filename: 'boot.js'}
        }, webpack))
        .pipe(gulp.dest(paths.dest))
        .pipe(sizereport({gzip: true, total: false}))
        .pipe(gulpif(!global.production, browserSync.stream()));
};

gulp.task('scriptsWebpack', scriptsWebpackTask);
module.exports = scriptsWebpackTask;
