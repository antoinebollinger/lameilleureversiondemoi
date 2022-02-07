'use strict';

import View from './View';

export default class App extends View {
    #sections;
    #images;
    #programs = [];
    #programsNav;

    constructor() {
        super();
        return (async () => {
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
        const sectionObserver = new IntersectionObserver(reveal, { root: null, threshold: 0 });
        this.#sections.forEach(function (section) {
            sectionObserver.observe(section);
            section.classList.add('section-hidden');
        });
    }

    async _revealImage() {
        const reveal = function (entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.src = (!entry.target.dataset.src) ? entry.target.src : entry.target.dataset.src;
                entry.target.addEventListener('load', function () {
                    this.classList.remove('toReveal');
                })
                observer.unobserve(entry.target);
            });
        }
        const imageObserver = new IntersectionObserver(reveal, { root: null, threshold: 0.5 });
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
        const timelineObserver = new IntersectionObserver(reveal, { root: null, threshold: 0.1 });
        this.aboutContainer.querySelectorAll('li').forEach(function (li) {
            timelineObserver.observe(li);
        });
        this.workContainer.querySelectorAll('li').forEach(function (li) {
            timelineObserver.observe(li);
        })
    }

    // RENDERING
    async _renderWork() {
        const html = await this.getHTML('work.html');
        this.workContainer.insertAdjacentHTML('beforeend', html);
    }

    async _renderProgram() {
        let buttons = '';
        await this.data.programs.forEach(async (program, index1) => {
            if (!program.active) return;
            buttons += `
                <li class="nav-item">
                    <a class="nav-link${(index1 === 0 ? ' active' : '')}" data-href="pills-program${1 + index1}" href="#">${program.title}</a>
                </li>
            `;
            let cards = '';
            await Promise.all(program.description.map(async (card, index2) => {
                const html = await this.getHTML(`programs/${program.folder + card.name}.html`);
                cards += `
                    <div class="col-lg-4 mb-4 mb-lg-0" style="order:${1 + index2};">
                        <div class="card shadow-sm h-100">
                            <a class="card-link w-100" data-bs-toggle="modal" data-bs-target="#modal-${index1 + '-' + index2}" href="#modal-${index1 + '-' + index2}">
                                <div class="card-hover primary">
                                    <div class="card-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="card-img-top" src="${this.folder.IMG}programs/${program.folder + card.name}.webp"
                                alt="${card.title}">
                            </a>
                            <div class="card-body bg-light">
                                <h5 class="card-title kalam text-uppercase text-primary-2">${card.title}</h5>
                                <div class="card-text">${html}</div>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#modal-${index1 + '-' + index2}">
                                    Lire plus...
                                </button>
                            </div>
                        </div>
                        <!-- Modal -->
                        <div class="modal fade" id="modal-${index1 + '-' + index2}" tabindex="-1" aria-labelledby="modalLabel-${index1 + '-' + index2}"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title kalam text-uppercase text-primary-2" id="modalLabel-${index1 + '-' + index2}">
                                            ${card.title}
                                        </h4>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="text-center mb-4"><img src="${this.folder.IMG}programs/${program.folder + card.name}.webp" alt="${card.title}" class="w-50 rounded shadow"></div>
                                        ${html}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }));
            const newProgram = this.toNode(`<div class="program py-4${(index1 === 0 ? ' show' : ' hide')}" id="pills-program${1 + index1}">
                    <div class="col-lg-8 mx-auto p-4 d-none">
                        <div class="text-center">
                            <h3 class="kalam text-uppercase text-tertary-2">${program.title}</h3>
                            <p class="text-muted">${program.subtitle ?? ''}</p>
                        </div>
                        <p>${program.intro ?? ''}</p>
                    </div>
                    <div class="row col p-lg-2">${cards}</div>
                </div>
            `);
            this.programsContainer.insertAdjacentElement('afterbegin', newProgram);
            this.#programs.push(newProgram);
        });
        if (this.data.programs.filter(program => program.active).length <= 1) return;
        this.programsContainer.insertAdjacentHTML('beforebegin', `<ul class="nav nav-tabs nav-fill" id="pills-tab">${buttons}</ul>`);
        this.programsContainer.className = 'bg-white border border-top-0';
    }

    async _renderFeedback() {
        this.data.feedback.forEach(ele => {
            this.feedbackContainer.insertAdjacentHTML('beforeend', `
                <div class="col-md-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle team-portrait" src="${this.folder.IMG}feedback/${ele.id}.webp" alt="${ele.name}" />
                        <h4 class="text-primary-2">${ele.name}</h4>
                        <p class="text-secondary">${ele.function}</p>
                        <a class="btn btn-primary btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-primary btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-primary btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                        <p class="feedback text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime
                            quam
                            architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>
            `);
            console.log(ele);
        });

    }

    async _renderTeam() {
        this.data.team.forEach(async (ele) => {
            const html = await this.getHTML(`team/${ele.id}.html`);
            this.teamContainer.insertAdjacentHTML('beforeend', `
                <div class="col-lg-${12 / this.data.team.length}">
                    <div class="team-member">
                        <img class="team-portrait mx-auto rounded-circle" src="${this.folder.IMG}team/${ele.id}.webp" alt="${ele.name}" />
                        <h3 class="text-primary-2">${ele.name}</h3>
                        <p class="text-muted">${ele.function}</p>
                        <div class="row align-items-center justify-content-center mb-4">
                            <div class="col-lg-4 col-10">
                                <img src="${this.folder.IMG}/logos/v4/purpleText/pinkLeaf/LMVDM.svg" class="w-100" alt="La Meilleure Version de Moi" />
                            </div>
                        </div>
                        <a class="btn btn-primary btn-social mx-2 shadow" href="${ele.instagram}" title="Instagram"><i class="fab fa-instagram"></i></a>
                        <a class="btn btn-primary btn-social mx-2 shadow" href="${ele.facebook}" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-primary btn-social mx-2 shadow" href="${ele.linkedIn}" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                ${html}
            `);
            const myAge = document.getElementById(`${ele.id}-age`);
            myAge.innerHTML = this.getAge(ele.birthDate);
            myAge.classList.remove('spinner-border');
        });
    }

    async _renderAbout() {
        this.data.about.forEach((ele, index) => {
            this.aboutContainer.insertAdjacentHTML('beforeend', `
                <li${(index % 2 === 1 ? ' class="timeline-inverted"' : '')}>
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="${this.folder.IMG}about/${ele.img}"
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
        this.data.skill.forEach(async (ele, index) => {
            const html = await this.getHTML(`skills/${ele.name}.html`);
            const newSkill = this.toNode(`<div class="col-lg-4 col-sm-6 mb-4" style="order:${1 + index};">
                        <!-- Skill item ${1 + index} -->
                        <div class="card shadow-sm h-100">
                            <a class="card-link w-100" data-bs-toggle="modal" href="#skillModal${1 + index}">
                                <div class="card-hover primary">
                                    <div class="card-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="card-img-top" src="${this.folder.IMG}expertise/preview/${ele.name}.webp" alt="${ele.title}" />
                            </a>
                            <div class="card-body bg-light">
                                <h5 class="card-title kalam text-uppercase text-primary-2">${ele.title}</h5>
                                <div class="card-text">${html}</div>
                            </div>
                        
                        </div>
                        <div class="modal fade" id="skillModal${1 + index}" tabindex="-1" aria-labelledby="modalLabel-${1 + index}"
                        aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title kalam text-uppercase text-primary-2" id="modalLabel-${index}">
                                            ${ele.title}
                                        </h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="text-center mb-4">
                                            <img src="${this.folder.IMG}expertise/${ele.name}.webp" alt="${ele.title}" class="w-100">
                                        </div>
                                        ${html}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `);
            this.skillsContainer.insertAdjacentElement('beforeend', newSkill);
        });
    }

    async _renderPrivacy() {
        const html = await this.getHTML('privacy.html');
        document.getElementById('modalPrivacy').querySelector('.modal-body').insertAdjacentHTML('beforeend', html);
    }

    async _renderTerms() {
        const html = await this.getHTML('terms.html');
        document.getElementById('modalCU').querySelector('.modal-body').insertAdjacentHTML('beforeend', html);
    }

    async _programsNavHandler() {
        this.#programsNav?.addEventListener('click', (e) => {
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

    async _reader(section) {
        const progressBar = this.toNode(`
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 0;" aria-valuenow="25" aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
        `, );
        const callback = (entries, observer) => {
            let myElement;
            const [entry] = entries;
            const DOMElement = entry.target;
            if (DOMElement.classList.contains('modal')) {
                myElement = DOMElement.querySelector('.modal-body')
                progressBar.classList.add('position-absolute');
                DOMElement.insertAdjacentElement('beforeend', progressBar);
            } else {
                myElement = window;
                progressBar.classList.add('position-fixed');
                document.body.insertAdjacentElement('beforeend', progressBar);
            }
            if (entry.isIntersecting) {
                myElement.myparams = entry;
                myElement.addEventListener(...scroller);
                progressBar.classList.add('show');
            } else {
                myElement.removeEventListener(...scroller);
                progressBar.classList.remove('show');
            }
        };
        const scroller = ['scroll', (e) => {
            const target = e.currentTarget.myparams.target;
            const vh = window.innerHeight;
            const h = target.getBoundingClientRect().height;
            const t = target.getBoundingClientRect().top;
            progressBar.querySelector('.progress-bar').style.width = `${(100 / h) * (vh - t)}%`;
        }];
        const contactObserver = new IntersectionObserver(callback, { root: null, threshold: 0 });
        contactObserver.observe(section);
    }

    //Initialisation
    async _init() {
        await Promise.all([
            this._renderWork(),
            this._renderProgram(),
            this._renderFeedback(),
            this._renderTeam(),
            this._renderAbout(),
            this._renderSkill(),
            this._renderPrivacy(),
            this._renderTerms()
        ]);
        this.#sections = document.querySelectorAll('section');
        this.#images = document.querySelectorAll('.toReveal');
        this.#programsNav = document.getElementById('pills-tab');
        await Promise.all([
            this._revealSection(),
            this._revealImage(),
            this._revealAbout(),
            this._programsNavHandler()
        ]);
        // this._reader(document.getElementById('monParcours'));
        // this._reader(this.team);
    }
};