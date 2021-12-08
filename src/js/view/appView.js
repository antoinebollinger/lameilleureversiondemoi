'use strict';

import View from "./View";
import data from "../json/data.json";
import { IMG_FOLDER } from "../config";

class App extends View {
    #sections;
    #images;
    #data;
    #programs;
    #programsNav;

    constructor(data) {
        super();
        return (async () => {
            this.#data = data;
            await this._init();
        })();
    }

    async _revealSection(delay = 0) {
        const reveal = function (entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                setTimeout(() => {
                    entry.target.classList.remove('section-hidden');
                    observer.unobserve(entry.target);
                }, delay);
            });
        };
        const sectionObserver = new IntersectionObserver(reveal, { root: null, threshold: 0.1 });
        this.#sections.forEach(function (section) {
            sectionObserver.observe(section);
            section.classList.add('section-hidden');
        });
    }

    async _revealImage(delay = 0) {
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
        this.aboutContainer.querySelectorAll('li').forEach(function (li) {
            timelineObserver.observe(li);
        });
    }

    async _renderWork() {
        const html = await this._getHtml('work.html');
        this.workContainer.insertAdjacentHTML('beforeend', html);
    }

    async _renderTeam() {
        this.#data.team.forEach(async (ele) => {
            const html = await this._getHtml(`team/${ele.html}`);
            this.teamContainer.insertAdjacentHTML('beforeend', `
                <div class="col-lg-${12 / this.#data.team.length}">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="${IMG_FOLDER}team/${ele.img}" alt="..." />
                        <h3>${ele.name}</h3>
                        <p class="text-muted">${ele.function}</p>
                        <a class="btn btn-primary btn-social mx-2 shadow" href="${ele.instagram}" title="Instagram"><i class="fab fa-instagram"></i></a>
                        <a class="btn btn-primary btn-social mx-2 shadow" href="${ele.facebook}" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-primary btn-social mx-2 shadow" href="${ele.linkedIn}" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                ${html}
            `);
        });
    }

    async _renderAbout() {
        this.#data.about.forEach((ele, index) => {
            this.aboutContainer.insertAdjacentHTML('beforeend', `
                <li${(index % 2 === 1 ? ' class="timeline-inverted"' : '')}>
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="${IMG_FOLDER}about/${ele.img}"
                            alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="">${ele.title}</h4>
                            <h5 class="subheading text-muted">${ele.subtitle}</h5>
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
        this.#data.skill.forEach((ele, index) => {
            this.skillsContainer.insertAdjacentHTML('beforeend', `
                <div class="col-lg-4 col-sm-6 mb-4">
                    <!-- Portfolio item ${1 + index} -->
                    <div class="portfolio-item shadow">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal${1 + index}">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="${IMG_FOLDER}expertise/small/${ele.img}" data-src="${IMG_FOLDER}expertise/preview/${ele.img}" alt="${ele.title}" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">${ele.title}</div>
                            <!-- <div class="portfolio-caption-subheading text-muted">Illustration</div> -->
                        </div>
                    </div>
                    <div class="modal fade" id="portfolioModal${1 + index}" tabindex="-1" aria-labelledby="modalLabel-${1 + index}"
                    aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel-${index}"><span class="text-uppercase text-primary">${ele.title}</span></h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="text-center mb-4"><img src="${IMG_FOLDER}expertise/${ele.img}" alt="${ele.title}" class="w-100 rounded shadow"></div>
                                    ${ele.text}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        });
    }

    async _renderProgram() {
        let buttons = '';
        await this.#data.programs.forEach(async (program, index1) => {
            buttons += `
                <li class="nav-item">
                    <a class="nav-link${(index1 === 0 ? ' active' : '')}" data-href="pills-program${1 + index1}" href="#">${program.title}</a>
                </li>
            `;
            let cards = '';
            await Promise.all(program.description.map(async (card, index2) => {
                const html = await this._getHtml(`programs/${program.folder + card.name}.html`);
                cards += `
                    <div class="col-lg-6 mb-4" style="order:${1 + index2};">
                        <div class="card shadow-sm">
                            <img class="card-img-top" src="${IMG_FOLDER}programs/${program.folder + card.name}.jpg"
                                alt="${card.title}">
                            <div class="card-body bg-tertary-2">
                                <h5 class="card-title text-muted">${card.title}</h5>
                                <div class="card-text">${html}</div>
                                <button type="button" class="btn btn-tertary-2" data-bs-toggle="modal"
                                    data-bs-target="#modal-${index1 + '-' + index2}">
                                    Lire plus...
                                </button>
                            </div>
                        </div>
                        <!-- Modal -->
                        <div class="modal fade" id="modal-${index1 + '-' + index2}" tabindex="-1" aria-labelledby="modalLabel-${index1 + '-' + index2}"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="modalLabel-${index1 + '-' + index2}">Programme <span class="kalam text-uppercase text-tertary-2">${program.title}</span><br><span class="text-muted">${card.title}</span></h4>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="text-center mb-4"><img src="${IMG_FOLDER}programs/${program.folder + card.name}.jpg" alt="${card.title}" class="w-50 rounded shadow"></div>
                                        ${html}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }));
            this.programsContainer.insertAdjacentHTML('beforeend', `
                <div class="program bg-white py-4${(index1 === 0 ? ' show' : ' hide')}" id="pills-program${1 + index1}">
                    <div class="col-lg-8 mx-auto p-4">
                        <div class="text-center">
                            <h3>Programme <span class="kalam text-uppercase text-tertary-2">${program.title}</span></h3>
                            <p class="text-muted">${program.subtitle ?? ''}</p>
                        </div>
                        <p>${program.intro ?? ''}</p>
                    </div>
                    <div class="row col-lg-8 mx-auto py-4">${cards}</div>
                </div>
            `);
        });
        this.programsContainer.insertAdjacentHTML('beforebegin', `<ul class="nav nav-tabs nav-fill" id="pills-tab">${buttons}</ul>`);
    }

    async _renderPrivacy() {
        const html = await this._getHtml('privacy.html');
        document.getElementById('modalPrivacy').querySelector('.modal-body').insertAdjacentHTML('beforeend', html);
    }

    async _renderTerms() {
        const html = await this._getHtml('terms.html');
        document.getElementById('modalCU').querySelector('.modal-body').insertAdjacentHTML('beforeend', html);
    }

    async _programsNavHandler() {
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

    //Initialisation
    async _init() {
        await Promise.all([
            this._renderWork(),
            this._renderTeam(),
            this._renderAbout(),
            this._renderSkill(),
            this._renderProgram(),
            this._renderPrivacy(),
            this._renderTerms()
        ]);
        this.#sections = document.querySelectorAll('section');
        this.#images = document.querySelectorAll('img');
        this.#programs = document.querySelectorAll('.program');
        this.#programsNav = document.getElementById('pills-tab');
        console.log(this);
        this._programsNavHandler();
        await Promise.all([
            this._revealSection(),
            this._revealImage(),
            this._revealAbout(),
        ]);
    }
};

export default new App(data);