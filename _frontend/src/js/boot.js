var Modules = {
    Example: require('./modules/ModuleExample').default
};

var Pages = {
    Home: require('./pages/PageHome').default
};

$(function () {
    initClasses($('body'));
});

window.initClasses = function (context) {
    let pages = context[0].querySelectorAll('[data-page]');
    let modules = context[0].querySelectorAll('[data-module]');

    // TODO : add $(body), $(html), $(window), $(document) in a global object used by pages and modules

    pages.forEach((el) => {
        let list = el.getAttribute('data-page').split(/\s+/);
        list.forEach((name) => {
            if (Pages[name] !== undefined) {
                new Pages[name]($(el)).init();
            }
        });
    });

    modules.forEach((el) => {
        let list = el.getAttribute('data-module').split(/\s+/);
        list.forEach((name) => {
            if (Modules[name] !== undefined) {
                new Modules[name]($(el)).init();
            }
        });
    });
};
