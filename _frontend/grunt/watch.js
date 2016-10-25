module.exports = {
    sass: {
        files: ["<%= cssSrc %>/**/*.scss"],
        tasks: ['build:css']
    },
    options: {
        spawn: false
    }
};
