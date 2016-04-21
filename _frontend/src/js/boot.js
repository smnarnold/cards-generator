var Modules = {
    Example: require('./modules/ModuleExample').default
};

var Pages = {
    Home: require('./pages/PageHome').default
};

$(function () {
    initClasses($('#site'));
});

window.initClasses = function (context) {
    _.each(context.find('[data-page]'), function (el) {
        let list = $(el).data('page').split(/\s+/);
        _.each(list, function (name) {
            if (Pages[name] !== undefined) {
                new Pages[name]($(el)).init();
            }
        });
    });

    _.each(context.find('[data-module]'), function (el) {
        let list = $(el).data('module').split(/\s+/);
        _.each(list, function (name) {
            if (Modules[name] !== undefined) {
                new Modules[name]($(el)).init();
            }
        });
    });
};
