import Page from './Page';

export default class extends Page {
  constructor(el) {
    super(el);

    this.dom = {
      ...this.dom,
    };
  }

  init() {
    super.init();
    this.bindEvents();
  }

  bindEvents() {
    super.bindEvents();
  }
}
