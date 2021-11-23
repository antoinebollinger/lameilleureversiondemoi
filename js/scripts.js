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
                    <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="${ele.linkedIn}"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        `);
    });
};
// ABOUT
const revealAbout = async function (delay = 0) {
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

// EVENTLISTENER ON DOM LOADED
window.addEventListener('DOMContentLoaded', async () => {

    await Promise.all([revealTeam(), revealSkills(), revealAbout(), revealSections()]);
    loadingImgs();

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

