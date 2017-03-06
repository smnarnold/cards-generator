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
    var pages = context[0].querySelectorAll('[data-page]');
    var modules = context[0].querySelectorAll('[data-module]');

    for(var x=0; x<pages.length; x++) {
        var page = pages[x];
        var pagesList = page.getAttribute('data-page').split(/\s+/);

        for(var y=0; y<pagesList.length; y++) {
            var pageName = pagesList[y];
            
            if (Pages[pageName] !== undefined) {
                new Pages[pageName]( $(page) ).init();
            }
        }
    }

    for(var i=0; i<modules.length; i++) {
        var module = modules[i];
        var modulesList = module.getAttribute('data-module').split(/\s+/);

        for(var j=0; j<modulesList.length; j++) {
            var moduleName = modulesList[j];

            if (Modules[moduleName] !== undefined) {
                new Modules[moduleName]( $(module) ).init();
            }
        }
    }
};
