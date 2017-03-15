module.exports = {
    options: {
        map: true,
        processors: [
            require('autoprefixer')({browsers: [
                'last 2 version',
                'ie 11'
            ]}),
            require('csswring')
        ]
    },
    dist: {
        src: '<%= cssDest %>/*.css'
    }
};
