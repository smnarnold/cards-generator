module.exports = {
    imports: {
        src: [
            '<%= cssSrc %>/vendors/bootstrap/_variables.scss',
            '<%= cssSrc %>/abstracts/_variables.scss',
            '<%= cssSrc %>/abstracts/**/*.scss',
            '<%= cssSrc %>/vendors/bootstrap/mixins/*.scss',
            '<%= cssSrc %>/vendors/bootstrap/_normalize.scss',
            '<%= cssSrc %>/vendors/bootstrap/_reboot.scss',
            '<%= cssSrc %>/vendors/**/*.scss',
            '<%= cssSrc %>/**/*.scss'
        ],
        dest: '<%= cssDest %>/main.scss'
    }
};
