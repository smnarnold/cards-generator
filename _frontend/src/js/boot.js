var Modules = {
    Example: require('./modules/Example').default,
};

var Pages = {
    Default: require('./pages/Default').default,
    Home: require('./pages/Home').default,
};

var console = window.console;

$(function () {
    window.dom = {
        body: $('body'),
        document: $(document),
        html: $('html'),
        window: $(window)
    };

    console.groupCollapsed('Page/Module initialization');
    initClasses(window.dom.body, Pages, 'page', '#8bbeb2', Pages.Default);
    initClasses(window.dom.body, Modules, 'module', '#18314f');
    window.dom.window.trigger('appReady');
    console.groupEnd();
});

window.initClasses = function (context, classes, selector, logColor, fallback) {
    var attr = 'data-' + selector;
    var items = context[0].querySelectorAll('[' + attr + ']');
    var styles = 'background: ' + logColor + '; color: #fff; padding: 0 .5em;';

    for (var i = 0; i < items.length; i++) { // ex: all [data-page]
        var item = items[i]; // ex: [data-page="Home"]
        var list = item.getAttribute(attr).split(/\s+/); // ex: Home

        for (var j = 0; j < list.length; j++) {
            var name = list[j];

            if (classes[name] !== undefined) {
                console.info('%c' + selector + ': ' + name + '%c', styles, '', item);
                new classes[name]($(item)).init();
            } else if (fallback !== undefined) {
                console.warn('%c' + selector + ': ' + name + ' | Fallback on Default%c', styles, '', item);
                new fallback($(item)).init();
            } else {
                console.error('%c' + selector + ': ' + name + ' | Failed to initialize%c', styles, '', item);
            }
        }
    }
};
