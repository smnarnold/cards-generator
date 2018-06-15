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

  initClasses(window.dom.body, Pages, 'page', '#8bbeb2', Pages.Default); // Pages
  initClasses(window.dom.body, Modules, 'module', '#18314f'); // Modules
  window.dom.window.trigger('appReady');
});

window.initClasses = function (context, classes, selector, logColor, Fallback) {
  if (!(context && classes && selector)) return;

  let attr = `data-${selector}`;
  let items = context[0].querySelectorAll(`[${attr}]`);
  let styles = `background: ${logColor || '#fff'}; color: #fff; padding: 0 .25em;`;

  for (let i = 0; i < items.length; i++) { // ex: all [data-page]
    let item = items[i]; // ex: [data-page="Home"]
    let list = item.getAttribute(attr).split(/\s+/); // ex: Home

    for (let j = 0; j < list.length; j++) {
      let name = list[j];

      if (classes[name] !== undefined) {
        console.log(`%c✔️${name}%O`, styles, { el: item });
        new classes[name]($(item)).init();
      } else if (Fallback !== undefined) {
        console.warn(`%c⚠️${name}%O`, styles, { el: item });
        new Fallback($(item)).init();
      } else {
        console.error(`%c❌${name}%O`, styles, { el: item });
      }
    }
  }
};
