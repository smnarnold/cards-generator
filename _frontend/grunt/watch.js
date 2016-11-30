module.exports = {
    js: {
        files: ["<%= jsSrc %>/**/*.js"],
        tasks: ['jshint']
    },
    sass: {
        files: ["<%= cssSrc %>/**/*.scss"],
        tasks: ['build:css']
    },
    options: {
        spawn: false
    }
};
