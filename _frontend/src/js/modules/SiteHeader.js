export default class {
  constructor(el) {
    this.dom = {
      ...window.dom,
      el: el,
    };
  }

  // -- Methods
  // --------------------------------------------------------------
  init() {
    this.bindEvents();
  }

  bindEvents() {
    //
  }
}
