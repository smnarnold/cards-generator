export default class Module {
  constructor(el) {

    //-- Properties
    //--------------------------------------------------------------
    this.dom = $.extend({}, window.dom, {
      el: el
    });

    this.eventNames = {
      animationEnd: 'animationend webkitAnimationEnd oanimationend oAnimationEnd MSAnimationEnd',
      transitionEnd: 'transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
    };
  }
}
