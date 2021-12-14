/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 726:
/***/ (() => {


;// CONCATENATED MODULE: ./src/js/config.js
const IMG_FOLDER = 'assets/img/';
const HTML_FOLDER = 'assets/html/';
;// CONCATENATED MODULE: ./src/js/view/View.js



class View {
    navbarCollapsible = document.getElementById('mainNav');
    masthead = document.querySelector('.masthead');
    workContainer = document.getElementById('myWork')
    programsContainer = document.getElementById('programsContainer');
    team = document.getElementById('team');
    teamContainer = document.getElementById('team').querySelector('.row');
    aboutContainer = document.getElementById('team').querySelector('.timeline');
    skillsContainer = document.getElementById('expertise');
    contactContainer = document.getElementById('contact');
    mapDiv = document.getElementById('mapDiv');
    backToTop = document.getElementById('btn-back-to-top');


    async _getHtml(url) {
        const privacy = await fetch(HTML_FOLDER + url);
        if (!privacy.ok) return;
        const html = await privacy.text();
        return html;
    }

    _convertHexaToRgb(hexa) {
        const r = parseInt(hexa.substr(1, 2), 16);
        const g = parseInt(hexa.substr(3, 2), 16);
        const b = parseInt(hexa.substr(5, 2), 16);
        return `${r}, ${g}, ${b}`;
    }

    _copy(text) {
        navigator.clipboard.writeText(text);
        alert(`Le texte : \n\n${text}\n\n a bien été copié dans le presse-papier.`);
    }
};
;// CONCATENATED MODULE: ./src/js/json/data.json
const data_namespaceObject = JSON.parse('{"header":{"path":"bw/","background":["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"]},"team":[{"name":"Sabrina Appriou","img":"sabrina.jfif","function":"Coach en développement personnel","instagram":"https://www.instagram.com/sabs.app/","facebook":"https://www.facebook.com/sabrina.appriou","linkedIn":"https://www.linkedin.com/in/sabrina-appriou-0138a8122/","html":"sabrina.html"}],"about":[{"img":"entreprise.jpg","title":"L\'entreprise","subtitle":"Mes débuts, ma carrière","text":"J’ai intégré le monde de l’entreprise après ma licence à l’âge de 23 ans. Il s’agissait d’une opportunité dans une grande entreprise qu’à l’époque je ne pouvais pas refuser.<br>Tous les 3-4 ans je changeais de poste. J’ai pu travailler dans différents domaines&nbsp;: marketing, back-office, service commercial, gestion de la ressource. Une opportunité pour moi d’évoluer dans différents environnements, d’aller à la rencontre de différentes personnes, de développer ma capacité d’adaptation. Je voyais ces changements comme autant de nouveaux défis et également de nouvelles opportunités d’évolution de ma carrière. Je me projetais dans un poste à responsabilités, dans une belle carrière, même si le domaine professionnel dans lequel j’évoluais ne me passionnait pas. Je devais poursuivre mes efforts pour atteindre mon objectif d’alors&nbsp;: gravir les échelons pour atteindre une situation financière confortable.<br>Cela passait toutefois par des concessions&nbsp;: je passais notamment beaucoup de temps dans les transports. J’étais rarement à la maison, prise par les temps de trajet et le temps passé au travail. Mais je ne voyais pas cela comme une contrainte mais plutôt comme un sacrifice à court terme. J’étais persuadée que je devais passer par cette étape pour obtenir un confort de vie."},{"img":"carriere.jpg","title":"Vie pro / Vie perso","subtitle":"Comment les concilier&nbsp;?","text":"Mais ce rythme de vie commençait à m’épuiser. Mon travail prenait une place importante dans ma vie, j’étais de moins en moins présente pour ma famille. À l’époque, maman de 2 enfants en bas âge, je devais concilier ma vie professionnelle et ma vie de famille. Et progressivement, je me suis sentie tirailler entre mon envie de réussir ma carrière et celle de voir grandir mes enfants.<br>Ma charge mentale s’accroissait et j’ai commencé à remettre en question mes choix professionnels.<br>Très vite, j’ai dû faire face à l’épuisement, à la lassitude, à l’incompréhension. Désillusion dans mes projets professionnels, contraintes qui se faisaient de plus en plus ressentir, et le sentiment que je subissais cette vie. J’ai peu à peu compris que j’étais confrontée à un déséquilibre, et que je devais trouver une solution plus pérenne.<br>Mon premier pas vers un rééquilibrage a été d’intégrer un poste plus proche de mon domicile. Ce rapprochement m’a permis de passer moins de temps dans les transports et plus de temps avec ma famille. Moins de trajet, du télétravail&nbsp;: sur le papier, cela semblait être une belle amélioration, un nouvel équilibre. La motivation revient. Mais s’essouffle aussi vite&nbsp;: dans ma tête une petite voix qui revient sans cesse&nbsp;: «&nbsp;Mais qu’est-ce que tu fous là&nbsp;?&nbsp;»."},{"img":"doutes.jpg","title":"La trentaine","subtitle":"Remise en question, nouveau cap","text":"Arrivée à la trentaine, je ne parvenais plus à trouver ma place dans ces choix de vie qui ne me correspondait pas du tout. Je me sentais en perpétuel conflit avec moi-même et surtout prisonnière de ma vie professionnelle. Je devais faire semblant que tout allait bien, trouver la motivation pour faire des choses qui n’avaient aucun sens pour moi… difficile.<br>Mais à qui en parler&nbsp;? Avais-je vraiment envie d’entendre l’avis des autres&nbsp;? De personnes qui ne savaient pas ce que je ressentais au fond de moi&nbsp;? Pour entendre des «&nbsp;tu te plains alors que tu as une situation confortable&nbsp;!&nbsp;» ou des «&nbsp;Démissionne et trouve autre chose&nbsp;!&nbsp;»&nbsp;? Facile à dire&nbsp;!<br>Alors comment trouver une issue à cette situation qui, effectivement, était à tout point de vue pourtant «&nbsp;confortable&nbsp;»&nbsp;: salariée d’une grande entreprise depuis près de 10 ans, 13ème mois, CE, salaire&nbsp;? Une bonne situation. Stable. Alors pourquoi chercher à changer&nbsp;? Surtout avec cette ancienneté et des enfants en bas âge à charge&nbsp;!"},{"img":"sport.jpg","title":"Le sport","subtitle":"Un pilier","text":"À ce moment-là, le sport tient déjà une place importante dans ma vie. Je prends le temps, à la pause déjeuner, d’aller faire du footing. Pourtant, cela ne suffit pas à empêcher mon mal-être de grandir. La frustration s’installe. Une sensation terrible de ne pas être à sa place, tandis que la société et ses injonctions me pressent à ne pas faiblir. À être une femme épanouie. À être une maman dévouée. Bien dans ses baskets. Peu à peu, je m’éloigne de mon bien-être intérieur et je me sens complètement démotivée."},{"img":"declic.jpg","title":"Le déclic","subtitle":"","text":"En 2018 je décide de retrouver la motivation et je me lance un défi&nbsp;: courir le marathon de Paris. Je mets toutes les chances de mon côté en suivant un plan d’entrainement strict et une préparation minutieuse. Et une semaine avant la course, patatras&nbsp;: grosse entorse à la cheville&nbsp;! Qu’à cela ne tienne, je vais malgré tout relever ce challenge. Et je le fais. Je puise en moi toutes les ressources physiques et mentales et je parviens à franchir la ligne d’arrivée.<br>Cet accomplissement sportif a été un déclic&nbsp;: on a la force en nous de sortir de notre zone de confort et de relever d’immenses défis, malgré l’adversité&nbsp;!"},{"img":"vocation.jpg","title":"La vocation","subtitle":"","text":"Je décide alors de me prendre main. Cela passe par un accompagnement afin que l’on m’aide à donner un autre sens à ma vie professionnelle et, pourquoi pas, à s’engager dans un changement de vie.<br>Des idées émergent&nbsp;: une activité en lien avec ce qui m’anime le plus, l’alimentation, le sport, l’humain. J’ai toujours pris du plaisir à accompagner mon entourage à se dépasser&nbsp;: amener les gens à sortir de leur zone de confort, par un défi sportif ou personnel. Je le faisais de façon spontanée, avec à chaque fois le sentiment d’avoir accompli MA mission.<br>Tout cela sonne comme une évidence pour moi. Je dois prendre un virage, suivre ma vocation, me tourner vers un métier d’accompagnement.<br>L’alimentation est un sujet qui me passionne depuis que je suis maman. Il fait partie de mon quotidien. «&nbsp;Bien manger&nbsp;».<br>Le sport m’aide à me surpasser et à repousser mes limites.<br>Le développement personnel est un état d’esprit qui m’aide à mieux me connaitre et comprendre les autres.<br>À l’issue de cet accompagnement, j’ai compris que je pouvais faire de belle chose en étant moi-même et en étant à l’écoute de mes besoins. Je fonce alors, avec pour objectif de redonner un sens à ma vie&nbsp;!"},{"img":"vie.jpg","title":"Concrétisation de mon projet","subtitle":"Ma nouvelle vie","text":"J’ai évidemment des moments de doutes. «&nbsp;Vais-je y arriver&nbsp;?&nbsp;», «&nbsp;Est-ce que ce n’est pas trop risqué&nbsp;?&nbsp;». Mais finalement, je me dis&nbsp;: «&nbsp;Qu’est-ce que je risque&nbsp;?&nbsp;».<br>Plusieurs sentiments se mêlent. L’excitation de ce changement de vie, la peur d’échouer, que cela ne fonctionne pas. Car j’ai tout de même besoin de me sentir en sécurité. Mais finalement, à ce moment-là de ma vie, je ne l’étais pas. Je ne me sentais plus en sécurité intérieurement. Je réalise donc que je suis prête pour le changement.<br>Je forge mon mental, bien décidée à trouver le chemin de la sérénité&nbsp;:<br>«&nbsp;Je ne perds jamais. Soit je gagne, soit j’apprends&nbsp;»<br>(Nelson Mandela)<br>Je me forme au métier de coaching, un métier d’accompagnement, c’est-à-dire aider les personnes dans le changement, la transition professionnelle ou personnelle. Je veux être plus proche de l’humain, aider ces personnes à se réaliser en allant puiser au fond d’elles toutes les ressources dont elles disposent déjà, à se libérer émotionnellement.<br>Je contribue ainsi, à mon niveau, au bien-être des autres. Je me sens alignée avec les valeurs qui me sont chères&nbsp;: authenticité, intégrité, générosité, pugnacité, respect de soi.<br>En tant que coach, j’accompagne aujourd\'hui les personnes afin qu’elles apprennent à mieux se connaitre pour révéler tout leur potentiel."}],"skill":[{"title":"Coach Consultante","name":"coach"},{"title":"Programmation Neuro-linguistique","name":"pnl"},{"title":"Neuroscience","name":"neuroscience"},{"title":"Analyse transactionnelle","name":"at"},{"title":"Alimentation consciente & émotionnelle","name":"alimentation"},{"title":"Art du questionnement","name":"questions"},{"title":"Construction identitaire","name":"identite"},{"title":"Gestion du stress","name":"stress"},{"title":"Changements & transitions","name":"changement"}],"programs":[{"title":"Coaching de vie","subtitle":"Personnel et/ou professionnel","folder":"vie/","description":[{"title":"C\'est quoi&nbsp;?","name":"what"},{"title":"A qui s\'adresse-t-il&nbsp;?","name":"who"},{"title":"Comment ça se passe&nbsp;?","name":"how"},{"title":"Qu\'est ce que ça m\'apporte&nbsp;?","name":"why"}]},{"title":"Coaching bien-être","subtitle":"Bien-être mental et physique","folder":"bienetre/","intro":"Passionnée du bien-être sur le plan emotionnel et physique, j\'ai souhaité étendre mes services de coaching dans ce sens. D\'ailleurs, le mémoire que j\'ai présenté dans le cadre de ma certification portait sur <q> Le coaching et la perte de poids </q>.","description":[{"title":"C\'est quoi&nbsp;?","name":"what"},{"title":"A qui s\'adresse-t-il&nbsp;?","name":"who"},{"title":"Comment ça se passe&nbsp;?","name":"how"},{"title":"Qu\'est ce que ça m\'apporte&nbsp;?","name":"why"}]}]}');
;// CONCATENATED MODULE: ./src/js/view/appView.js






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
                    <div class="timeline-image"><img class="rounded-circle img-fluid toReveal" src="${IMG_FOLDER}about/${ele.img}"
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
        this.#data.skill.forEach(async (ele, index) => {
            const html = await this._getHtml(`skills/${ele.name}.html`)
            this.skillsContainer.insertAdjacentHTML('beforeend', `
                <div class="col-lg-4 col-sm-6 mb-4" style="order:${1 + index};">
                    <!-- Skill item ${1 + index} -->
                    <div class="card shadow-sm">
                        <a class="card-link w-100" data-bs-toggle="modal" href="#skillModal${1 + index}">
                            <div class="card-hover primary">
                                <div class="card-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="card-img-top toReveal" src="${IMG_FOLDER}expertise/small/${ele.name}.jpg" data-src="${IMG_FOLDER}expertise/preview/${ele.name}.jpg" alt="${ele.title}" />
                        </a>
                        <div class="card-body bg-light">
                            <h5 class="card-title text-muted textNoWrap">${ele.title}</h5>
                            <div class="card-text">${html}</div>
                        </div>
                     
                    </div>
                    <div class="modal fade" id="skillModal${1 + index}" tabindex="-1" aria-labelledby="modalLabel-${1 + index}"
                    aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel-${index}"><span class="text-uppercase text-primary">${ele.title}</span></h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="text-center mb-4"><img src="${IMG_FOLDER}expertise/${ele.name}.jpg" alt="${ele.title}" class="w-100"></div>
                                    ${html}
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
                            <a class="card-link" data-bs-toggle="modal" data-bs-target="#modal-${index1 + '-' + index2}" href="#modal-${index1 + '-' + index2}">
                                <div class="card-hover tertary">
                                    <div class="card-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="card-img-top" src="${IMG_FOLDER}programs/${program.folder + card.name}.jpg"
                                alt="${card.title}">
                            </a>
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
                <div class="program py-4${(index1 === 0 ? ' show' : ' hide')}" id="pills-program${1 + index1}">
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

    async _reader(section) {
        const progressBar = document.querySelector('.progress');
        const callback = (entries, observer) => {
            const myElement = window;
            const [entry] = entries;
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
            this._renderTeam(),
            this._renderAbout(),
            this._renderSkill(),
            this._renderProgram(),
            this._renderPrivacy(),
            this._renderTerms()
        ]);
        this.#sections = document.querySelectorAll('section');
        this.#images = document.querySelectorAll('.toReveal');
        this.#programs = document.querySelectorAll('.program');
        this.#programsNav = document.getElementById('pills-tab');
        await Promise.all([
            this._revealSection(),
            this._revealImage(),
            this._revealAbout(),
        ]);
        this._programsNavHandler();
        this._reader(this.team.querySelector('.container'));
    }
};

/* harmony default export */ const appView = (new App(data_namespaceObject));
;// CONCATENATED MODULE: ./src/js/view/mapView.js





class Mappy extends View {
    #goToHome = document.getElementById('goToHome');
    #goToCurrent = document.getElementById('goToCurrent');
    #distance = document.getElementById('distance');
    #goDistance = document.getElementById('goDistance');
    #mapZoomLevel = 15;
    #map;
    #home;
    #current;
    #homeCoords = [47.658236, -2.760847];
    #currentCoords;

    constructor() {
        super();
        this._launchMap();
    }

    _launchMap() {
        const callback = (entries, observer) => {
            const [entry] = entries;
            if (!entry.isIntersecting) return;
            this._getCurrentCoords();
            observer.unobserve(entry.target);
        };
        const contactObserver = new IntersectionObserver(callback, { root: null, threshold: 0.1 });
        contactObserver.observe(this.contactContainer);
    }

    _loadMap(current = false) {
        this.#map = L.map('map', { scrollWheelZoom: false }).setView(this.#homeCoords, this.#mapZoomLevel);
        L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
            maxZoom: 20,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);
        this.#home = this._addMarker(this.#homeCoords, 'SAB Coaching', 'tertary');
        if (!current) return;
        this.#current = this._addMarker(this.#currentCoords, 'Vous');
        const group = [this.#home, this.#current];
        this.#distance.insertAdjacentHTML('afterbegin', `${this._calculateDistance(this.#current.getLatLng(), this.#home.getLatLng())} km`)
        this._goDistance(group);
        this._goFocusHandler(this.#goToHome, { marker: this.#home, coords: this.#homeCoords });
        this._goFocusHandler(this.#goToCurrent, { marker: this.#current, coords: this.#currentCoords });
        this._goDistanceHandler(this.#goDistance, group);
    }

    _addMarker(coords, text, style = 'primary', marker = 'neutral') {
        const newMarker = L.icon({
            iconUrl: `../${IMG_FOLDER}markers/${marker}.png`,
            iconSize: [48, 48]
        });
        return L.marker(coords, { icon: newMarker })
            .addTo(this.#map)
            .bindPopup(L.popup({ offset: [0, 0], maxWidth: 250, minWidth: 100, autoClose: false, closeOnClick: false, className: style }))
            .setPopupContent(text)
            .openPopup();
    }

    _getCurrentCoords() {
        navigator.geolocation.getCurrentPosition((pos) => {
            this.#currentCoords = [pos.coords.latitude, pos.coords.longitude];
            this._loadMap(true);

        }, () => { this._loadMap() });
    }

    _goFocusHandler(button, ele) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            this._goFocus(ele);
        });
    }

    _goDistanceHandler(button, array) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            this._goDistance(array);
        });
    }

    _goFocus(ele) {
        this.#map.flyTo(ele.coords, this.#mapZoomLevel);
        ele.marker.openPopup();
    }

    _goDistance(array) {
        let group = new L.featureGroup(array)
        this.#map.fitBounds(group.getBounds(), { padding: [50, 50] });
    }

    _calculateDistance(from, to) {
        return ((from.distanceTo(to)).toFixed(0) / 1000).toFixed(0);
    }
};

/* harmony default export */ const mapView = (new Mappy());
;// CONCATENATED MODULE: ./src/js/view/settingsView.js




class Settings extends View {
    primary = getComputedStyle(document.body).getPropertyValue('--bs-primary').trim();
    secondary = getComputedStyle(document.body).getPropertyValue('--bs-primary-2').trim();
    #colorsForm;
    #primaryInput;
    primarySpan;
    #secondaryInput;
    secondarySpan;
    #copyButton;

    constructor() {
        super();
        this._init();
    }

    async _renderColorSettings() {
        const footer = document.querySelector('footer div.col');

        footer.insertAdjacentHTML('beforeend', `
            |<p class="link-primary text-decoration-none mx-3 cursor-pointer d-inline" data-bs-toggle="modal" data-bs-target="#settingsModal" href="#">Paramètres</p>
            <div class="modal fade" id="settingsModal" tabindex="-1" aria-labelledby="settingsModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="settingsModalLabel">Paramètres</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Changer les couleurs</p>
                            <form id="colorsForm">
                                <div>
                                    <input type="color" name="color" id="primaryInput" data-root="--bs-primary" data-this="primary" />
                                    <label for="primaryInput">Couleur principale (<span id="primarySpan" class="text-primary fw-bold"></span>)</label>
                                </div>
                                <div>
                                    <input type="color" name="color" id="secondaryInput" data-root="--bs-primary-2" data-this="secondary" />
                                    <label for="secondaryInput">Couleur secondaire (<span id="secondarySpan" class="text-primary-2 fw-bold"></span>)</label>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success" id="copyButton">Copier les couleurs</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Valider</button>
                        </div>
                    </div>
                </div>
            </div>
        `);
        this.#colorsForm = document.getElementById('colorsForm');
        this.#primaryInput = document.getElementById('primaryInput');
        this.#secondaryInput = document.getElementById('secondaryInput');
        this.primarySpan = document.getElementById('primarySpan');
        this.secondarySpan = document.getElementById('secondarySpan');
        this.#copyButton = document.getElementById('copyButton');

        this.#primaryInput.value = this.primarySpan.innerText = this.primary;
        this.#secondaryInput.value = this.secondarySpan.innerText = this.secondary;
    }

    _addInputHolder() {
        this.#colorsForm.querySelectorAll('input').forEach(ele => {
            ele.addEventListener('change', () => {
                const hexa = ele.value;
                const rgb = this._convertHexaToRgb(hexa);
                document.documentElement.style.setProperty(ele.dataset.root, hexa);
                document.documentElement.style.setProperty(`${ele.dataset.root}-rgb`, rgb);
                this[`${ele.dataset.this}`] = hexa;
                this[`${ele.dataset.this}Span`].innerText = hexa;
            });
        });
    }

    _addCopyHandler() {
        this.#copyButton.addEventListener('click', () => {
            this._copyColors();
        })
    }

    _copyColors() {
        this._copy(`Couleur principale : ${this.primary}, couleur secondaire : ${this.secondary}`);
    }

    async _init() {
        await this._renderColorSettings();
        this._addInputHolder();
        this._addCopyHandler();
    }


}

/* harmony default export */ const settingsView = (new Settings());
;// CONCATENATED MODULE: ./src/js/view/navView.js






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
            this.masthead.style.backgroundImage = `url('../${IMG_FOLDER}header/${this.#header.path}${this.#header.background[Math.floor(Math.random() * nbr)]}')`;
        }, interval);
        const before = window.getComputedStyle(this.masthead, ':before');
        //console.log(before.getPropertyValue('background'));
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

/* harmony default export */ const navView = (new Nav(data_namespaceObject));
;// CONCATENATED MODULE: ./src/js/index.js






/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__[726]();
/******/ 	
/******/ })()
;