import Page from './Page';

export default class PageHome extends Page {
    constructor(el) {
        super(el);

        //-- Properties
        //--------------------------------------------------------------
        $.extend(this.dom, {

        });
    }

    //-- Methods
    //--------------------------------------------------------------
    init() {
        super.init();
        this.bindEvents();

        console.log('home');
    }

    bindEvents() {
        super.bindEvents();
    }
}