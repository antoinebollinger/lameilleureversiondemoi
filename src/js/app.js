'use strict';

import data from './json/data.json';

export default class App {
    #masthead = document.querySelector('.masthead');
    #navbarCollapsible = document.getElementById('mainNav');
    #teamContainer = document.getElementById('team').querySelector('.row');
    #aboutContainer = document.querySelector('.timeline');
    #skillsContainer = document.getElementById('expertise').querySelector('.row');
    #skillsModalsContainer = document.getElementById('skills-modals');
    #programsContainer = document.getElementById('programsContainer');
    #backToTop = document.getElementById('btn-back-to-top');
    #sections;
    #images;

    constructor() {
        this._init();
    }

    async _revealSection(delay = 0) {
        this.#sections = document.querySelectorAll('section');
        const reveal = function (entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                setTimeout(() => {
                    entry.target.classList.remove('section-hidden');
                    observer.unobserve(entry.target);
                }, delay);
            });
        };
        const sectionObserver = new IntersectionObserver(reveal, { root: null, threshold: 0.15 });
        this.#sections.forEach(function (section) {
            sectionObserver.observe(section);
            section.classList.add('section-hidden');
        });
    }

    async _revealImage(delay = 0) {
        this.#images = document.querySelectorAll('img');
        const reveal = function (entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                setTimeout(() => {
                    entry.target.src = (!entry.target.dataset.src) ? entry.target.src : entry.target.dataset.src;
                    entry.target.addEventListener('load', function () {
                        this.classList.add('reveal');

                    })
                    observer.unobserve(entry.target);
                }, delay);
            });
        }
        const imageObserver = new IntersectionObserver(reveal, { root: null, threshold: 0, rootMargin: '55px' });
        this.#images.forEach(function (image) {
            imageObserver.observe(image);
        });
    }

    async _revealAbout(delay = 0) {
        const reveal = function (entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                setTimeout(() => {
                    entry.target.classList.add('in');
                    observer.unobserve(entry.target);
                }, delay);
            });
        };
        const timelineObserver = new IntersectionObserver(reveal, { root: null, threshold: 0, rootMargin: '55px' });
        this.#aboutContainer.querySelectorAll('li').forEach(function (li) {
            timelineObserver.observe(li);
        });
    }

    async _renderTeam() {
        data.team.forEach((ele, index) => {
            this.#teamContainer.insertAdjacentHTML('beforeend', `
                <div class="col-lg-${12 / team.length}">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="assets/img/team/${ele.img}" alt="..." />
                        <h4>${ele.name}</h4>
                        <p class="text-muted">${ele.function}</p>
                        <a class="btn btn-primary btn-social mx-2 shadow" href="${ele.instagram}"><i class="fab fa-instagram"></i></a>
                        <a class="btn btn-primary btn-social mx-2 shadow" href="${ele.facebook}"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-primary btn-social mx-2 shadow" href="${ele.linkedIn}"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            `);
        });
    }

    async _renderAbout() {
        data.about.forEach((ele, index) => {
            this.#aboutContainer.insertAdjacentHTML('beforeend', `
                <li${(index % 2 === 1 ? ' class="timeline-inverted"' : '')}>
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/${ele.img}"
                            alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4>${ele.date}</h4>
                            <h4 class="subheading">${ele.title}</h4>
                        </div>
                        <div class="timeline-body">
                            <p class="text-muted">${ele.text}</p>
                        </div>
                    </div>
                </li >
            `);
        });
    }

    async _renderSkill() {
        data.skill.forEach((ele, index) => {
            this.#skillsContainer.insertAdjacentHTML('beforeend', `
                <div class="col-lg-4 col-sm-6 mb-4">
                    <!-- Portfolio item ${1 + index} -->
                    <div class="portfolio-item shadow">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal${1 + index}">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/expertise/small/${ele.img}" data-src="assets/img/expertise/preview/${ele.img}" alt="${ele.title}" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">${ele.title}</div>
                            <!-- <div class="portfolio-caption-subheading text-muted">Illustration</div> -->
                        </div>
                    </div>
                </div>
            `);
            this.#skillsModalsContainer.insertAdjacentHTML('beforeend', `
                <div class="portfolio-modal modal fade" id="portfolioModal${1 + index}" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg"
                                    alt="Fermer" /></div>
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-8">
                                        <div class="modal-body">
                                            <!-- Project details-->
                                            <h2 class="text-uppercase">${ele.title}</h2>
                                            <!-- <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p> -->
                                            <img class="img-fluid d-block mx-auto" src="assets/img/expertise/${ele.img}" alt="${ele.title}" />
                                            <p>${ele.text}</p>
                                        
                                            <!-- <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                                type="button">
                                                <i class="fas fa-times me-1"></i>
                                                Close Project
                                            </button> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            `);
        });
    }

    async _renderProgram() {
        data.programs.forEach((program, index1) => {
            let cards = '';
            program.description.forEach((card, index2) => {
                cards += `
                    <div class="col-lg-6 mb-4">
                        <div class="card">
                            <img class="card-img-top" src="assets/img/programs/${card.img}"
                                alt="${card.title}">
                            <div class="card-body">
                                <h5 class="card-title">${card.title}</h5>
                                <div class="card-text">${card.text}</div>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#modal-${index1 + '-' + index2}">
                                    Lire plus...
                                </button>
                            </div>
                        </div>
                        <!-- Modal -->
                        <div class="modal fade" id="modal-${index1 + '-' + index2}" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">${card.title}</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="text-center mb-4"><img src="assets/img/programs/${card.img}" alt="${card.title}" class="w-50 rounded shadow"></div>
                                        ${card.text}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
            this.#programsContainer.insertAdjacentHTML('beforeend', `
                <div class="program bg-light mb-4">
                    <div class="col-lg-8 mx-auto py-4">
                        <div class="text-center">
                            <h4>Programme <span class="text-uppercase text-primary">${program.title}</span></h4>
                            <p class="text-muted">${program.subtitle ?? ''}</p>
                        </div>
                        <p>${program.intro ?? ''}</p>
                    </div>
                    <div class="row col-lg-8 mx-auto py-4">${cards}</div>
                </div>
            `);
        });
    }

    // Nav & Header functions
    _headerSlider(interval = 5000) {
        const nbr = data.headerBackground.length;
        setInterval(() => {
            this.#masthead.style.backgroundImage = `url('../assets/img/header/bw/${data.headerBackground[Math.floor(Math.random() * nbr)]}')`;
        }, interval);
    }

    _navbarShrink() {
        if (window.scrollY === 0) {
            this.#navbarCollapsible.classList.remove('navbar-shrink');
            this.#backToTop.classList.remove('show');
            this.#backToTop.classList.add('hide');

            //this.#backToTop.style.display = 'none';

        } else {
            this.#navbarCollapsible.classList.add('navbar-shrink');
            this.#backToTop.classList.add('show');
            this.#backToTop.classList.remove('hide');

            //this.#backToTop.style.display = 'block';
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

    //Initialisation
    async _init() {
        window.addEventListener('DOMContentLoaded', async () => {
            this._headerSlider();
            this._navbarShrink();
            document.addEventListener('scroll', () => {
                this._navbarShrink();
            });
            this._scrollSpy();
            this._responsiveNavbar();
        });
        await Promise.all([this._renderTeam(), this._renderAbout(), this._renderSkill(), this._renderProgram()]);
        await Promise.all([this._revealSection(), this._revealImage(), this._revealAbout()]);
    }
};