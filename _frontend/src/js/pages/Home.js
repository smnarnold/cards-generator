import Page from '../base/Page';

export default class extends Page {
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
        super.init();
        this.bindEvents();

        console.log(this.dom.el.data('page'));
    }

    bindEvents() {
        super.bindEvents();
    }
}
