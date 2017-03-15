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

window.initClasses = function(context, obj, selector) {
    var attr = 'data-' + selector;
    var items = context[0].querySelectorAll('['+ attr +']');

    for (var x = 0; x < items.length; x++) { // ex: all [data-page]
        var item = items[x]; // ex: [data-page="Home"]
        var list = item.getAttribute(attr).split(/\s+/); // ex: Home

        for (var y = 0; y < list.length; y++) {
            var name = list[y];

            if (obj[name] !== undefined) {
                new obj[name]($(item)).init();
            }
        }
    }
};