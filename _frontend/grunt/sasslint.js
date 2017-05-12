module.exports = {
    options: {
        configFile: '.sass-lint.yml'
    },
    target: [
        '<%= cssSrc %>/**/*.scss',
        '!<%= cssSrc %>/abstracts/**/*.scss',
        '!<%= cssSrc %>/vendors/**/*.scss'
    ]
};
