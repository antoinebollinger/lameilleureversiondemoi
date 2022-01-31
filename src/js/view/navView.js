'use strict';

import View from './View';

export default class Nav extends View {
    #navbarImg = this.navbarCollapsible.querySelector('img');

    constructor() {
        super();
        this._init();
    }

    _navbarShrink() {
        if (window.scrollY === 0) {
            this.navbarCollapsible.classList.remove('navbar-shrink');
            this.#navbarImg.src = this.#navbarImg.dataset.base;
            this.backToTop.classList.remove('show');
            this.backToTop.classList.add('hide');
        } else {
            this.navbarCollapsible.classList.add('navbar-shrink');
            this.#navbarImg.src = this.#navbarImg.dataset.shrink;
            this.backToTop.classList.add('show');
            this.backToTop.classList.remove('hide');
        }
    }

    _scrollSpy() {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    }

    _responsiveNavbar() {
        const navbarToggler = document.body.querySelector('.navbar-toggler');
        const responsiveNavItems = [].slice.call(
            document.querySelectorAll('#navbarResponsive .nav-link')
        );
        responsiveNavItems.map(function (responsiveNavItem) {
            responsiveNavItem.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        });
        const navbarDropdown = document.querySelectorAll('.dropdown');
        navbarDropdown.forEach(ele => {
            ele.addEventListener('mouseover', (e) => {
                //e.preventDefault();
                ele.querySelector('.dropdown-menu').classList.toggle('show');
            });
        });
    }

    _init() {
        window.addEventListener('DOMContentLoaded', async () => {
            this._navbarShrink();
            document.addEventListener('scroll', () => {
                this._navbarShrink();
            });
            this._scrollSpy();
            this._responsiveNavbar();
        });
    }
}