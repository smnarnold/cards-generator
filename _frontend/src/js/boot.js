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

    initClasses(window.dom.body, Pages, 'page');
    initClasses(window.dom.body, Modules, 'module');
});

window.initClasses = function (context, classes, selector) {
    var attr = 'data-' + selector;
    var items = context[0].querySelectorAll('[' + attr + ']');

    for (var i = 0; i < items.length; i++) { // ex: all [data-page]
        var item = items[i]; // ex: [data-page="Home"]
        var list = item.getAttribute(attr).split(/\s+/); // ex: Home

        for (var j = 0; j < list.length; j++) {
            var name = list[j];

            if (classes[name] !== undefined) {
                new classes[name]($(item)).init();
            }
        }
    }
};
