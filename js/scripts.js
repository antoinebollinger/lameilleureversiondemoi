/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

// Cookies constent baner 
// const cookieBanner = document.querySelector('.cookie-banner');
// const closeCookieBanner = document.querySelector('.cookie-close');
// if (localStorage.getItem("cookieSeen") !== "shown")
//     cookieBanner.style.display = 'block'; //localStorage.setItem("cookieSeen", "shown");
// closeCookieBanner.addEventListener('click', () => {
//     cookieBanner.style.display = 'none';
// });

'use strict';

// Reveal sections
const revealSections = async function (delay = 0) {
    const allSections = document.querySelectorAll('section');
    const reveal = function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            setTimeout(() => {
                entry.target.classList.remove('section--hidden');
                observer.unobserve(entry.target);
            }, delay)
        });
    };
    const sectionObserver = new IntersectionObserver(reveal, { root: null, threshold: 0.15 });
    allSections.forEach(function (section) {
        sectionObserver.observe(section);
        section.classList.add('section--hidden');
    });
};

// Skills
const revealSkills = async function () {
    const skillsContainer = document.getElementById('work').querySelector('.row');
    const skillsModalsContainer = document.getElementById('skills-modals');
    const mySkills = [
        {
            "img": "01.jpg",
            "lazy": "01_small.jpg",
            "title": "Se développer",
            "texte": "Apprendre à se développer"
        },
        {
            "img": "02.jpg",
            "lazy": "02_small.jpg",
            "title": "Construction de soi",
            "texte": "Apprendre à se développer"
        },
        {
            "img": "03.jpg",
            "lazy": "03_small.jpg",
            "title": "Se reconnecter",
            "texte": "Apprendre à se développer"
        },
        {
            "img": "04.jpg",
            "lazy": "04_small.jpg",
            "title": "Motivation",
            "texte": "Apprendre à se développer"
        },
        {
            "img": "05.jpg",
            "lazy": "05_small.jpg",
            "title": "Quête de sens",
            "texte": "Apprendre à se développer"
        },
        {
            "img": "06.jpg",
            "lazy": "06_small.jpg",
            "title": "Respect",
            "texte": "Apprendre à se développer"
        }
    ];

    mySkills.forEach((ele, index) => {
        skillsContainer.insertAdjacentHTML('beforeend', `
        <div class="col-lg-4 col-sm-6 mb-4">
            <!-- Portfolio item ${1 + index} -->
            <div class="portfolio-item">
                <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal${1 + index}">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" src="assets/img/portfolio/${ele.lazy}" data-src="assets/img/portfolio/${ele.img}" alt="${ele.title}" />
                </a>
                <div class="portfolio-caption">
                    <div class="portfolio-caption-heading">${ele.title}</div>
                    <!-- <div class="portfolio-caption-subheading text-muted">Illustration</div> -->
                </div>
            </div>
        </div>
    `);
        skillsModalsContainer.insertAdjacentHTML('beforeend', `
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
                                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/${ele.img}" alt="${ele.title}" loading="lazy" />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt
                                        repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae,
                                        nostrum, reiciendis facere nemo!</p>
                                  
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
};
// TEAM
const revealTeam = async function () {
    const teamContainer = document.getElementById('team').querySelector('.row');
    const team = [
        {
            "name": "Sabrina Appriou",
            "img": "sabrina.jfif",
            "function": "Coach en développement personnel",
            "instagram": "https://www.instagram.com/sabs.app/",
            "facebook": "https://www.facebook.com/sabrina.appriou",
            "linkedIn": "https://www.linkedin.com/in/sabrina-appriou-0138a8122/"
        },
        // {
        //     "name": "Antoine Bollinger",
        //     "img": "antoine.jpg",
        //     "function": "Webmaster",
        //     "linkedIn": "https://www.linkedin.com/in/antoinebollinger/"
        // }
    ];
    team.forEach((ele, index) => {
        teamContainer.insertAdjacentHTML('beforeend', `
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
};
// ABOUT
const revealAbout = async function (delay = 0) {
    const aboutContainer = document.querySelector('.timeline');
    const myAbouts = [
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

    myAbouts.forEach((ele, index) => {
        aboutContainer.insertAdjacentHTML('beforeend', `
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

    const timeline = document.querySelector('.timeline').querySelectorAll('li');
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
    timeline.forEach(function (li) {
        timelineObserver.observe(li);
    });
};

// Lazy loading images
const loadingImgs = function (delay = 0) {
    const imgTargets = document.querySelectorAll('img');
    const revealImage = function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            setTimeout(() => {
                entry.target.src = (!entry.target.dataset.src) ? entry.target.src : entry.target.dataset.src;
                entry.target.addEventListener('load', function () {
                    this.classList.add('reveal');

                })
                observer.unobserve(entry.target);
            }, delay)
        });
    };
    const imageObserver = new IntersectionObserver(revealImage, { root: null, threshold: 0, rootMargin: '55px' });
    imgTargets.forEach(function (image) {
        imageObserver.observe(image);
    });
};

// Header background
const changeHeaderBg = function () {
    const mastheader = document.querySelector('.masthead');
    const myBgs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
    const newBg = () => {
        mastheader.style.backgroundImage = `linear-gradient(45deg, rgba(var(--bs-primary-rgb), 1), rgba(var(--bs-primary-rgb), 0.5), rgba(var(--bs-primary-rgb), 1)), url('../assets/img/header/bw/${myBgs[Math.floor(Math.random() * myBgs.length)]}')`;
    };
    //newBg();
    setInterval(() => {
        newBg();
    }, 5000);
}

// EVENTLISTENER ON DOM LOADED
window.addEventListener('DOMContentLoaded', async () => {

    await Promise.all([revealTeam(), revealSkills(), revealAbout(), revealSections()]);

    loadingImgs();
    changeHeaderBg();

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
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


});

// MAP
class Mappy {
    #map;
    #mapZoomLevel = 13;
    #home;
    #homeCoords = [47.658236, -2.760847];
    #locate = document.getElementById('locate');

    constructor() {
        this._loadMap(this.#homeCoords);
        this._addLocateHandler();
    }

    _loadMap(coords) {
        this.#map = L.map('map').setView(coords, this.#mapZoomLevel);
        L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
            maxZoom: 20,
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        }).addTo(this.#map);
        this.#home = this._addMarker(this.#homeCoords, 'Sabrina Appriou');
    }
    _addMarker(coords, text) {
        const newMarker = L.icon({
            iconUrl: '../assets/img/marker.png',
            iconSize: [48, 48]

        });
        return L.marker(coords, { icon: newMarker })
            .addTo(this.#map)
            .bindPopup(L.popup({ offset: [0, -15], maxWidth: 250, minWidth: 100, autoClose: false, closeOnClick: false, className: 'custom-popup' }))
            .setPopupContent(text)
            .openPopup();
    }
    _addLocateHandler() {
        this.#locate.addEventListener('click', () => {
            this.#map.flyTo(this.#homeCoords, this.#mapZoomLevel);
            this.#home.openPopup();
        })
    }
};

const newMap = new Mappy();