export default class Module {
    constructor(el) {

        //-- Properties
        //--------------------------------------------------------------
        this.dom = {
            el: el,
            body: $('body'),
            html: $('html'),
            site: $('#site'),
            window: $(window)
        };
    }
}
