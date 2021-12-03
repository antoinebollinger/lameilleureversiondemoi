'use strict';

import View from "./View";
import data from "../json/data.json";

class Nav extends View {
    #header;
    constructor(data) {
        super();
        this.#header = data.header;
        this._init();
    }

    // Nav & Header functions
    _headerSlider(interval = 5000) {
        const nbr = this.#header.background.length;
        setInterval(() => {
            this.masthead.style.backgroundImage = `url('../assets/img/header/${this.#header.path}${this.#header.background[Math.floor(Math.random() * nbr)]}')`;
        }, interval);
        const before = window.getComputedStyle(this.masthead, ':before');
        console.log(before.getPropertyValue('background'));
    }

    _navbarShrink() {
        if (window.scrollY === 0) {
            this.navbarCollapsible.classList.remove('navbar-shrink');
            this.backToTop.classList.remove('show');
            this.backToTop.classList.add('hide');
        } else {
            this.navbarCollapsible.classList.add('navbar-shrink');
            this.backToTop.classList.add('show');
            this.backToTop.classList.remove('hide');
        }
        // setTimeout(() => {
        //     document.getElementsByTagName('html')[0].style.scrollPaddingTop = `${this.navbarCollapsible.offsetHeight}px`;
        // }, 100);
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
            this._headerSlider();
            this._navbarShrink();
            document.addEventListener('scroll', () => {
                this._navbarShrink();
            });
            this._scrollSpy();
            this._responsiveNavbar();
        });
    }
}

export default new Nav(data);