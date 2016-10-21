var Modules = {
    Example: require('./modules/ModuleExample').default
};

var Pages = {
    Home: require('./pages/PageHome').default
};

$(function () {
    initClasses( $('#site') );
});

window.initClasses = function (context) {
    let pages = context[0].querySelectorAll('[data-page]');
    let modules = context[0].querySelectorAll('[data-module]');

    pages.forEach((el) => {
        let list = el.getAttribute('data-page').split(/\s+/);
        list.forEach((name) => {
            if (Pages[name] !== undefined) {
                new Pages[name]( $(el) ).init();
            }
        });
    });

    modules.forEach((el) => {
        let list = el.getAttribute('data-module').split(/\s+/);
        list.forEach((name) => {
            if (Modules[name] !== undefined) {
                new Modules[name]( $(el) ).init();
            }
        });
    });
};
