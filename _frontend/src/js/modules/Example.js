import Module from '../base/Module';

export default class extends Module {
    constructor(el) {
        super(el);

        //-- Properties
        //--------------------------------------------------------------
    }

    //-- Methods
    //--------------------------------------------------------------
    init() {
        this.bindEvents();

        console.log(this.el.data('module'));
    }

    bindEvents() {

    }
}
