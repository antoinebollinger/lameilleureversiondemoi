'use strict';

import View from "./View";

class Cookies extends View {
    #body = document.body;
    #cookies = document.cookie;

    constructor() {
        super();
    }

    _renderBanner() {

    }
}

export default new Cookies();