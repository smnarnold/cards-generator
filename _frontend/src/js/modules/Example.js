import Module from '../base/Module';

export default class extends Module {
    constructor(el) {
        super(el);

        //-- Properties
        //--------------------------------------------------------------
        this.dom = $.extend({}, this.dom, {

        });
    }

    //-- Methods
    //--------------------------------------------------------------
    init() {
        this.bindEvents();

        console.log(this.dom.el.data('module'));
    }

    bindEvents() {

    }
}
