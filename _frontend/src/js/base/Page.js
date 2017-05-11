import td from 'throttle-debounce';
import ua from 'ua-parser-js';

export default class Page {
    constructor(el) {

        //-- Properties
        //--------------------------------------------------------------
        this.breakpoints = ["xs", "sm", "md", "lg", "xl"];
        this.dom = $.extend({}, window.dom, {
            el: el
        });

        this.ua = new ua().getResult();
    }

    init() {
        this.setBreakpoint();
        this.setDeviceType();
    }

    setDeviceType() {
        this.dom.html.addClass(this.ua.os.name)
            .addClass(this.ua.browser.name);
    }

    bindEvents() {
        this.dom.window.on('resize', td.debounce(300, () => this.setBreakpoint()));
    }

    setBreakpoint() {
        let temp = window.document.createElement('div');
        this.dom.body[0].appendChild(temp);

        for (let i = this.breakpoints.length - 1; i >= 0; i--) {
            let env = this.breakpoints[i];

            temp.className = `hidden-${env}-up`;
            if ($(temp).is(':hidden')) {
                temp.parentNode.removeChild(temp);
                console.log(`%c Bootstrap: ${env} `, 'background: #573e7d; color: #fff');
                break;
            }
        }
    }
}
