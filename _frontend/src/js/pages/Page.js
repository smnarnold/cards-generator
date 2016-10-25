import td from 'throttle-debounce';
import ua from 'ua-parser-js';
import ModuleBootstrapHelper from '../modules/ModuleBootstrapHelper';

export default class Page {
    constructor(el) {

        //-- Properties
        //--------------------------------------------------------------
        this.dom = {
            el: el,
            body: $('body'),
            html: $('html'),
            w: $(window)
        };

        this.ua = new ua().getResult();
    }

    init() {
        // this.initBootstrapHelper();
        this.setDeviceType();
    }

    initBootstrapHelper() {
        this.bootstrapHelper = new ModuleBootstrapHelper();
        this.breakpoint = this.bootstrapHelper.breakpoint;

        console.log('Bootstrap: ' + this.breakpoint);

        this.dom.w.on('resize', td.debounce(300, () => {
            this.breakpoint = this.bootstrapHelper.breakpoint;
            console.log('Bootstrap: ' + this.breakpoint);
        }));
    }

    setDeviceType() {
        this.dom.html.addClass(this.ua.os.name + " " + this.ua.browser.name);
    }

    bindEvents() {

    }
}
