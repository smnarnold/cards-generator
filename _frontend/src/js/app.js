import './helpers/polyfills';
import isArray from 'lodash/isArray';

const Modules = {
  SiteHeader: require('./modules/SiteHeader').default,
};

const Pages = {
  Default: require('./pages/Default').default,
};

window.dom = {
  body: document.body,
  html: document.documentElement,
};

/**
 * Init - Instanciate and initialize Modules and/or Pages in the element provided
 * @param {element} [el=window.dom.body] - the element to search into for data-[type]
 * @param {array.<string>|string} [types=['page', 'module']] - 3 possible types: 'module', 'page', or ['page', 'module']
 */
window.init = function(el = window.dom.body, types = ['page', 'module']) {
  types = typeof types === 'string' ? [types] : types;

  if (!isArray(types)) return;

  for (let i = 0; i < types.length; i++) {
    const type = types[i];

    if (type !== 'module' && type !== 'page') continue;

    const attr = `data-${type}`;
    const classes = type === 'page' ? Pages : Modules;
    const items = el.querySelectorAll(`[${attr}]`);
    const styles = `background: ${type === 'page' ? '#8bbeb2' : '#18314f'}; color: #fff; padding: 0 0.25em;`;

    for (let j = 0; j < items.length; j++) {
      const item = items[j]; // ex: <div data-page="Home">...</div>
      const list = item.getAttribute(attr).split(/\s+/); // ex: ['Home']

      for (let k = 0; k < list.length; k++) {
        const name = list[k]; // ex: 'Home'

        if (classes[name] !== undefined) {
          console.log(`%c✔️${name}%O`, styles, { el: item });
          new classes[name](item).init();
        } else if (classes.Default !== undefined) {
          console.warn(`%c⚠️${name}%O`, styles, { el: item });
          new classes.Default(item).init();
        } else {
          console.error(`%c❌️${name}%O`, styles, { el: item });
        }
      }
    }
  }

  window.dispatchEvent(new CustomEvent('app:ready'));
};

if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
  window.init(window.dom.body);
} else {
  document.addEventListener('DOMContentLoaded', window.init(window.dom.body));
}
