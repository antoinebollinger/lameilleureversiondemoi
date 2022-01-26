'use strict';

import View from "./View";

class Cookies extends View {
    #body = document.body;
    #cookies = document.cookie;

    constructor() {
        super();
        console.log(this);
    }

    _renderBanner() {

    }
}

export default new Cookies();