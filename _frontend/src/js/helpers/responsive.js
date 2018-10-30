import { debounce } from 'throttle-debounce';

const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];

export class Responsive {
  constructor() {
    this._dom = {
      ...window.dom,
      dummyDiv: window.document.createElement('div'),
    };

    this._currentBreakpoint = null;

    this._bindEvents();
  }

  // getter / setter

  get breakpoint() {
    return this._currentBreakpoint;
  }

  // private methods

  _bindEvents() {
    window.addEventListener('app:ready', () => this._detectBreakpoint());
    window.addEventListener('resize', debounce(300, () => this._detectBreakpoint()));
  }

  _detectBreakpoint() {
    let breakpoint = null;

    this._dom.body.appendChild(this._dom.dummyDiv);

    for (let i = breakpoints.length - 1; i >= 0; i--) {
      breakpoint = breakpoints[i];
      this._dom.dummyDiv.className = `d-${breakpoint}-none`;
      if (window.getComputedStyle(this._dom.dummyDiv).display === 'none') break;
    }

    this._dom.body.removeChild(this._dom.dummyDiv);

    if (this._currentBreakpoint !== breakpoint) {
      this._currentBreakpoint = breakpoint;
      this._dispatchBreakpoint();
    }
  }

  _dispatchBreakpoint() {
    window.dispatchEvent(new CustomEvent('breakpoint:change', { detail: this._currentBreakpoint }));
  }

  // public methods

  isGreaterOrEqualTo(compareToBreakpoint) {
    const compareIndex = breakpoints.indexOf(compareToBreakpoint);
    if (compareIndex === -1) return false;

    const currentIndex = breakpoints.indexOf(this._currentBreakpoint);
    return currentIndex >= compareIndex;
  }

  isGreaterThan(compareToBreakpoint) {
    const compareIndex = breakpoints.indexOf(compareToBreakpoint);
    if (compareIndex === -1) return false;

    const currentIndex = breakpoints.indexOf(this._currentBreakpoint);
    return currentIndex > compareIndex;
  }

  isSmallerOrEqualTo(compareToBreakpoint) {
    const compareIndex = breakpoints.indexOf(compareToBreakpoint);
    if (compareIndex === -1) return false;

    const currentIndex = breakpoints.indexOf(this._currentBreakpoint);
    return currentIndex <= compareIndex;
  }

  isSmallerThan(compareToBreakpoint) {
    const compareIndex = breakpoints.indexOf(compareToBreakpoint);
    if (compareIndex === -1) return false;

    const currentIndex = breakpoints.indexOf(this._currentBreakpoint);
    return currentIndex < compareIndex;
  }
}
