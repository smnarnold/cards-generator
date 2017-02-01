module.exports = {
    dynamic_mappings: {
        expand: true,
        src: [
            "<%= cssSrc %>/**/*.scss",
            "!<%= cssSrc %>/bootstrap/**/*.scss",
            "!<%= cssSrc %>/helpers/**/*.scss",
            "!<%= cssSrc %>/global.scss"
        ]
    },
    options: {
        config: "csscomb.json"
    }
};
