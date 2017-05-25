module.exports = {
    options: {
        configFile: '.stylelintrc.js',
        formatter: 'string',
    },
    src: [
        '<%= cssSrc %>/**/*.scss',
        '!<%= cssSrc %>/abstracts/**/*.scss',
        '!<%= cssSrc %>/vendors/**/*.scss'
    ]
};
