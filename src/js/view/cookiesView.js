'use strict';

import View from './View';

export default class Cookies extends View {
    #body = document.body;
    #cookies = document.cookie;

    constructor() {
        super();
    }

    _renderBanner() {

    }
}