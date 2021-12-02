'use strict';

import View from "./View";

class Programs extends View {
    #programs = document.querySelectorAll('.program');
    #programsNav = document.getElementById('pills-tab');

    constructor() {
        super();
        this._programsNavHandler();
    }

    _programsNavHandler() {
        this.#programsNav.addEventListener('click', (e) => {
            e.preventDefault();
            const btn = e.target.closest('.nav-link');
            if (!btn) return;
            //Buttons
            this.#programsNav.querySelectorAll('.nav-link').forEach(ele => ele.classList.remove('active'));
            btn.classList.add('active');
            //Tabs
            const tab = document.getElementById(btn.dataset.href);
            this.#programs.forEach(ele => {
                if (ele === tab) {
                    ele.classList.remove('hide');
                    ele.classList.add('show');
                } else {
                    ele.classList.remove('show');
                    ele.classList.add('hide');

                }
            });

        });
    }
}

export default new Programs();