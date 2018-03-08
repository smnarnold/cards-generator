import ua from 'ua-parser-js';
import responsiveHelper from './../helpers/responsiveHelper';

export default class Page {
  constructor(el) {

    //-- Properties
    //--------------------------------------------------------------
    this.dom = $.extend({}, window.dom, {
      el: el,
    });

    this.ua = new ua().getResult();
  }

  init() {
    this.setDeviceType();
  }

  setDeviceType() {
    this.dom.html
      .addClass(this.ua.os.name.toLowerCase())
      .addClass(this.ua.browser.name.toLowerCase());
  }

  bindEvents() {
    this.dom.window.on('breakpointChange', (e, breakpoint) => this.onBreakpointChange(breakpoint));
  }

  // eslint-disable-next-line no-unused-vars
  onBreakpointChange(breakpoint) {
    console.log(`%cBootstrap: ${responsiveHelper.breakpoint}`, 'background: #573e7d; color: #fff; padding: 0 .5em;');
  }
}
