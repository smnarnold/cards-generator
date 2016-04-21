import Module from './Module';

export default class ModuleExample extends Module {
    constructor(el) {
        super(el);

        //-- Properties
        //--------------------------------------------------------------
        this.selectBox = null;
    }

    //-- Methods
    //--------------------------------------------------------------
    init() {
        this.bindEvents();
    }

    bindEvents() {

    }
}
