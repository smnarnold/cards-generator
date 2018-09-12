import UAParser from 'ua-parser-js';
import responsiveHelper from './../helpers/responsive';

export default class Page {
  constructor(el) {
    this.dom = $.extend({}, window.dom, {
      el: el,
    });

    this.parser = new UAParser().getResult();
  }

  init() {
    this.setDeviceType();
  }

  setDeviceType() {
    let browser = this.parser.browser.name.toLowerCase();
    let os = this.parser.os.name.toLowerCase();

    this.dom.html.addClass(browser).addClass(os);
  }

  bindEvents() {
    this.dom.window.on('breakpointChange', () => this.logBreakpoint());
  }

  logBreakpoint() {
    console.log(`%cBootstrap: ${responsiveHelper.breakpoint}`, 'background: #573e7d; color: #fff; padding: 0 .5em;');
  }
}
