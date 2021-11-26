'use strict';

export default class App {
    #masthead = document.querySelector('.masthead');
    #navbarCollapsible = document.getElementById('mainNav');
    #teamContainer = document.getElementById('team').querySelector('.row');
    #aboutContainer = document.querySelector('.timeline');
    #skillsContainer = document.getElementById('expertise').querySelector('.row');
    #skillsModalsContainer = document.getElementById('skills-modals');
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
        const team = [
            {
                "name": "Sabrina Appriou",
                "img": "sabrina.jfif",
                "function": "Coach en développement personnel",
                "instagram": "https://www.instagram.com/sabs.app/",
                "facebook": "https://www.facebook.com/sabrina.appriou",
                "linkedIn": "https://www.linkedin.com/in/sabrina-appriou-0138a8122/"
            },
        ];
        team.forEach((ele, index) => {
            this.#teamContainer.insertAdjacentHTML('beforeend', `
                <div class="col-lg-${12 / team.length}">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="assets/img/team/${ele.img}" alt="..." />
                        <h4>${ele.name}</h4>
                        <p class="text-muted">${ele.function}</p>
                        <a class="btn btn-primary btn-social mx-2" href="${ele.instagram}"><i class="fab fa-instagram"></i></a>
                        <a class="btn btn-primary btn-social mx-2" href="${ele.facebook}"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-primary btn-social mx-2" href="${ele.linkedIn}"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            `);
        });
    }

    async _renderAbout() {
        const about = [
            {
                'img': 'entreprise.jpg',
                'date': '2007-2017',
                'title': "L'entreprise",
                'text': "J’ai intégré le monde de l’entreprise après ma licence à l’âge de 23 ans. Il s’agissait d’une opportunité dans une grande entreprise qu’à l’époque je ne pouvais pas refuser.<br>Arrivée à la trentaine, je ne parvenais plus à trouver ma place dans ce monde qui ne me correspondait pas du tout. Je me sentais en perpétuel conflit avec moi-même et surtout prisonnière de ma vie professionnelle. Je devais faire semblant que tout allait bien, trouver la motivation pour faire des choses qui n’avaient aucun sens pour moi… difficile.<br>Mais comment trouver une issue à cette situation qui, à tout point de vue, était pourtant « confortable » : salariée d’une grande entreprise depuis près de 10 ans, 13ème mois, CE, salaire ? Une bonne situation. Stable. Alors pourquoi chercher à changer ? Surtout avec cette ancienneté et des enfants en bas âge à charge !"
            },
            {
                'img': 'sport.jpg',
                'date': 'Depuis toujours',
                'title': "Le sport",
                'text': "À ce moment-là, le sport tient déjà une place importante dans ma vie. Je prends le temps, à la pause déjeuner, d’aller faire du footing. Pourtant, cela ne suffit pas à empêcher mon mal-être de grandir. La frustration s’installe. Une sensation terrible de ne pas être à sa place, tandis que la société et ses injonctions me pressent à ne pas faiblir. À être une femme épanouie. À être une maman dévouée. Bien dans ses baskets. Peu à peu, je m’éloigne de mon bien-être intérieur et je me sens complètement démotivée."
            },
            {
                'img': 'declic.jpg',
                'date': '2018',
                'title': "Le déclic",
                'text': "En 2018 je décide de retrouver la motivation et je me lance un défi : courir le marathon de Paris. Je mets toutes les chances de mon côté en suivant un plan d’entrainement strict et une préparation minutieuse. Et une semaine avant la course, patatras : grosse entorse à la cheville ! Qu’à cela ne tienne, je vais malgré tout relever ce challenge. Et je le fais. Je puise en moi toutes les ressources physiques et mentales et je parviens à franchir la ligne d’arrivée.<br>Cet accomplissement sportif a été un déclic : on a la force en nous de sortir de notre zone de confort et de relever d’immenses défis, malgré l’adversité !"
            },
            {
                'img': 'vocation.jpg',
                'date': '2018-aujourd\'hui',
                'title': "La vocation",
                'text': "Je décide alors de me prendre main. Cela passe par un accompagnement afin que l’on m’aide à donner un autre sens à ma vie professionnelle et, pourquoi pas, à s’engager dans un changement de vie.<br>Des idées émergent : une activité en lien avec ce qui m’anime le plus, l’alimentation, le sport, l’humain. Tout cela sonne comme une évidence pour moi. Je dois prendre un virage, suivre ma vocation, me tourner vers un métier d’accompagnement.<br>L’alimentation est un sujet qui me passionne depuis que je suis maman. Il fait partie de mon quotidien. « Bien manger ».<br>Le sport m’aide à me surpasser et à repousser mes limites.<br>Le développement personnel est un état d’esprit qui m’aide à mieux me connaitre et comprendre les autres.<br>À l’issue de cet accompagnement, j’ai compris que je pouvais faire de belle chose en étant moi-même et en étant à l’écoute de mes besoins. Je fonce alors, avec pour objectif de redonner un sens à ma vie !<br>Je me forme au métier de coaching, un métier d’accompagnement, c’est-à-dire accompagner les personnes dans le changement, la transition professionnelle ou personnelle. Je veux être plus proche de l’humain, aider ces personnes à se réaliser en allant puiser au fond d’elles toutes les ressources dont elles disposent déjà, à se libérer émotionnellement.<br>Je contribue ainsi, à mon niveau, au bien-être des autres. Je me sens alignée avec les valeurs qui me sont chères : authenticité, générosité, pugnacité, respect de soi.<br>En tant que coach, j’accompagne les personnes afin qu’elles apprennent à mieux se connaitre pour révéler tout leur potentiel."
            }
        ];
        about.forEach((ele, index) => {
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
        const skill = [
            {
                "img": "coach.jpg",
                "title": "Coach Consultante",
                "text": "Ma certification de Coach Consultate délivrée par l'organisme Linkup Coaching"
            },
            {
                "img": "alimentation.jpg",
                "title": "Alimentation consciente",
                "text": "Chercher à créer une conscience totale de nos choix alimentaires sans jugement de soi. Il est important de vivre le moment présent pour observer l'expérience et les émotions tout en consommant des aliments."
            },
            {
                "img": "questions.jpg",
                "title": "Art du questionnement",
                "text": "Cette discipline a pour ambition d’éveiller notre intelligence à interroger de façon pertinente, dans le but de découvrir de nouveaux possibles."
            },
            {
                "img": "identite.jpg",
                "title": "Construction identitaire",
                "text": "La construction identitaire est un processus hautement dynamique au cours duquel la personne se définit et se reconnaît par sa façon de réfléchir, d’agir et de vouloir dans les contextes sociaux et l’environnement naturel où elle évolue"
            },
            {
                "img": "changement.jpg",
                "title": "Changements & transitions",
                "text": "Il n'est jamais facile de changer..."
            },
            {
                "img": "stress.jpg",
                "title": "Gestion du stress",
                "text": "Apprendre à gérer son stress en toute situation"
            },
            {
                "img": "pnl.jpg",
                "title": "Programmation Neuro-linguistique (PNL)",
                "text": "Née suite à l'observation comportementale, la programmation neuro-linguistique (PNL) désigne tout un ensemble de techniques (dissociation, recadrage…) et de méthodes visant à favoriser le développement personnel de l’individu."
            },
            {
                "img": "neuroscience.jpg",
                "title": "Neuroscience",
                "text": "Un coach spécialisé en neurosciences comprend de façon approfondie le fonctionnement du cerveau, les mécanismes de l’attention et leur utilisation en coaching."
            },
            {
                "img": "at.jpg",
                "title": "Analyse transactionnelle",
                "test": "L’analyse transactionnelle est une théorie et méthode qui s’appuie sur une philosophie optimiste dont le langage est accessible à tous. Son système de valeurs repose sur les bases du courant humaniste, avec pour postulat que la nature humaine est fondamentalement positive, capable de faire des choix et de les assumer."
            }
        ];
        skill.forEach((ele, index) => {
            this.#skillsContainer.insertAdjacentHTML('beforeend', `
                <div class="col-lg-4 col-sm-6 mb-4">
                    <!-- Portfolio item ${1 + index} -->
                    <div class="portfolio-item">
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

    // Nav & Header functions
    _headerSlider(interval = 5000) {
        const myBgs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
        setInterval(() => {
            this.#masthead.style.backgroundImage = `url('../assets/img/header/bw/${myBgs[Math.floor(Math.random() * myBgs.length)]}')`;
        }, interval);
    }
    _navbarShrink() {
        if (window.scrollY === 0) {
            this.#navbarCollapsible.classList.remove('navbar-shrink');
            this.#backToTop.style.display = 'none';

        } else {
            this.#navbarCollapsible.classList.add('navbar-shrink');
            this.#backToTop.style.display = 'block';
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
        await Promise.all([this._renderTeam(), this._renderAbout(), this._renderSkill()]);
        await Promise.all([this._revealSection(), this._revealImage(), this._revealAbout()]);
    }
};