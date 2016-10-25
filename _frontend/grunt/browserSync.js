module.exports = {
    bsFiles: {
        src : [
            '<%= cssDest %>/**/*.css',
            '<%= jsDest %>/**/*.js',
            '<%= basePath %>/**/*.html'
        ]
    },
    options: {
        open: false,
        //proxy: '<%= vhost %>',
        port: '3000',
        watchTask: true,
        server: {
            baseDir: '../'
        }
    }
};
