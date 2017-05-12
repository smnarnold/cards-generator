module.exports = {
    dynamic_mappings: {
        expand: true,
        src: [
            "<%= cssSrc %>/**/*.scss",
            "!<%= cssSrc %>/abstracts/**/*.scss",
            "!<%= cssSrc %>/vendors/**/*.scss",
        ]
    },
    options: {
        config: ".csscomb.json"
    }
};
