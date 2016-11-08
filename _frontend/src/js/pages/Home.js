import Page from '../base/Page';

export default class extends Page {
    constructor(el) {
        super(el);

        //-- Properties
        //--------------------------------------------------------------
    }

    //-- Methods
    //--------------------------------------------------------------
    init() {
        super.init();
        this.bindEvents();

        console.log('Home');
    }

    bindEvents() {
        super.bindEvents();
    }
}
