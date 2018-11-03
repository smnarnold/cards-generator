import UAParser from 'ua-parser-js';

export default class Page {
  constructor(el) {
    this.dom = {
      ...window.dom,
      el: el,
    };

    this.parser = new UAParser().getResult();
  }

  init() {
    this.setDeviceType();
  }

  setDeviceType() {
    const browser = this.parser.browser.name.toLowerCase().split(' ');
    const os = this.parser.os.name.toLowerCase().split(' ');
    this.dom.html.classList.add(...browser, ...os);
  }

  bindEvents() {}
}
