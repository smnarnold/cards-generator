var Modules = {
    Example: require('./modules/Example').default
};

var Pages = {
    Home: require('./pages/Home').default
};

$(function () {
    window.dom = {
        body: $('body'),
        document: $(document),
        html: $('html'),
        window: $(window)
    };

    initClasses(window.dom.body);
});

window.initClasses = function (context) {
    let pages = context[0].querySelectorAll('[data-page]');
    let modules = context[0].querySelectorAll('[data-module]');

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
