let Modules = {
  Example: require('./modules/Example').default,
};

let Pages = {
  Default: require('./pages/Default').default,
  Home: require('./pages/Home').default,
};

let console = window.console;

$(function () {
  window.dom = {
    body: $('body'),
    document: $(document),
    html: $('html'),
    window: $(window),
  };

  console.groupCollapsed('Page/Modules initialization');
  initClasses(window.dom.body, Pages, 'page', '#8bbeb2', Pages.Default);
  initClasses(window.dom.body, Modules, 'module', '#18314f');
  window.dom.window.trigger('appReady');
  console.groupEnd();
});

window.initClasses = function (context, classes, selector, logColor, fallback) {
  let attr = 'data-' + selector;
  let items = context[0].querySelectorAll('[' + attr + ']');
  let styles = 'background: ' + logColor + '; color: #fff; padding: 0 .5em;';

  for (let i = 0; i < items.length; i++) { // ex: all [data-page]
    let item = items[i]; // ex: [data-page="Home"]
    let list = item.getAttribute(attr).split(/\s+/); // ex: Home

    for (let j = 0; j < list.length; j++) {
      let name = list[j];

      if (classes[name] !== undefined) {
        console.info('%c' + name + '%c', styles, '', item);
        new classes[name]($(item)).init();
      } else if (fallback !== undefined) {
        console.warn('%c' + name + ' | Fallback on Default%c', styles, '', item);
        new fallback($(item)).init();
      } else {
        console.error('%c' + name + ' | Failed to initialize%c', styles, '', item);
      }
    }
  }
};
