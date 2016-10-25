import Module from './Module';

export default class ModuleExample extends Module {
    constructor(el) {
        super(el);

        //-- Properties
        //--------------------------------------------------------------
    }

    //-- Methods
    //--------------------------------------------------------------
    init() {
        this.bindEvents();

        console.log('example');
    }

    bindEvents() {

    }
}
