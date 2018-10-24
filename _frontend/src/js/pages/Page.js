import UAParser from 'ua-parser-js';
import { Responsive } from './../helpers/Responsive';

export default class Page {
  constructor(el) {
    this.dom = {
      ...window.dom,
      el: el,
    };

    this.parser = new UAParser().getResult();
    this.responsive = new Responsive();
  }

  init() {
    this.setDeviceType();
  }

  setDeviceType() {
    const browser = this.parser.browser.name.toLowerCase();
    const os = this.parser.os.name.toLowerCase();

    this.dom.html.classList.add(browser, os);
  }

  bindEvents() {
    window.addEventListener('breakpoint:change', () => this.logBreakpoint());
  }

  logBreakpoint() {
    console.log(`%cBootstrap: ${this.responsive.breakpoint}`, 'background: #573e7d; color: #fff; padding: 0 .5em;');
  }
}
