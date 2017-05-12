var gulp          = require('gulp');
var webpack       = require('webpack');
var webpackStream = require('webpack-stream');
var handleErrors  = require('../lib/handleErrors');
var path          = require('path');

var paths = {
    src: path.join(global.paths.src, 'js/boot.js'),
    dest: path.join(global.paths.dest, 'js'),
};

var scriptsTask = function () {
    return gulp.src(paths.src)
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
                    sourceMap: global.production ? false : true
                }),
            ],
            output: {filename: 'boot.js'}
        }, webpack))
        .on('error', handleErrors)
        .pipe(gulp.dest(paths.dest));
};

gulp.task('scripts', scriptsTask);
module.exports = scriptsTask;
