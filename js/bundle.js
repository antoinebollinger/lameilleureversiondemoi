/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";const e=async function(e=0){const t=document.querySelectorAll("section"),n=new IntersectionObserver((function(t,n){t.forEach((t=>{t.isIntersecting&&setTimeout((()=>{t.target.classList.remove("section--hidden"),n.unobserve(t.target)}),e)}))}),{root:null,threshold:.15});t.forEach((function(e){n.observe(e),e.classList.add("section--hidden")}))},t=async function(){const e=document.getElementById("work").querySelector(".row"),t=document.getElementById("skills-modals");[{img:"01.jpg",lazy:"01_small.jpg",title:"Se développer",texte:"Apprendre à se développer"},{img:"02.jpg",lazy:"02_small.jpg",title:"Construction de soi",texte:"Apprendre à se développer"},{img:"03.jpg",lazy:"03_small.jpg",title:"Se reconnecter",texte:"Apprendre à se développer"},{img:"04.jpg",lazy:"04_small.jpg",title:"Motivation",texte:"Apprendre à se développer"},{img:"05.jpg",lazy:"05_small.jpg",title:"Quête de sens",texte:"Apprendre à se développer"},{img:"06.jpg",lazy:"06_small.jpg",title:"Respect",texte:"Apprendre à se développer"}].forEach(((n,s)=>{e.insertAdjacentHTML("beforeend",`\n        <div class="col-lg-4 col-sm-6 mb-4">\n            \x3c!-- Portfolio item ${1+s} --\x3e\n            <div class="portfolio-item">\n                <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal${1+s}">\n                    <div class="portfolio-hover">\n                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>\n                    </div>\n                    <img class="img-fluid" src="assets/img/portfolio/${n.lazy}" data-src="assets/img/portfolio/${n.img}" alt="${n.title}" />\n                </a>\n                <div class="portfolio-caption">\n                    <div class="portfolio-caption-heading">${n.title}</div>\n                    \x3c!-- <div class="portfolio-caption-subheading text-muted">Illustration</div> --\x3e\n                </div>\n            </div>\n        </div>\n    `),t.insertAdjacentHTML("beforeend",`\n        <div class="portfolio-modal modal fade" id="portfolioModal${1+s}" tabindex="-1" role="dialog" aria-hidden="true">\n            <div class="modal-dialog">\n                <div class="modal-content">\n                    <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg"\n                            alt="Fermer" /></div>\n                    <div class="container">\n                        <div class="row justify-content-center">\n                            <div class="col-lg-8">\n                                <div class="modal-body">\n                                    \x3c!-- Project details--\x3e\n                                    <h2 class="text-uppercase">${n.title}</h2>\n                                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>\n                                    <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/${n.img}" alt="${n.title}" loading="lazy" />\n                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur\n                                        adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt\n                                        repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae,\n                                        nostrum, reiciendis facere nemo!</p>\n                                  \n                                    \x3c!-- <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"\n                                        type="button">\n                                        <i class="fas fa-times me-1"></i>\n                                        Close Project\n                                    </button> --\x3e\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>    \n    `)}))},n=async function(){const e=document.getElementById("team").querySelector(".row"),t=[{name:"Sabrina Appriou",img:"sabrina.jfif",function:"Coach en développement personnel",instagram:"https://www.instagram.com/sabs.app/",facebook:"https://www.facebook.com/sabrina.appriou",linkedIn:"https://www.linkedin.com/in/sabrina-appriou-0138a8122/"}];t.forEach(((n,s)=>{e.insertAdjacentHTML("beforeend",`\n            <div class="col-lg-${12/t.length}">\n                <div class="team-member">\n                    <img class="mx-auto rounded-circle" src="assets/img/team/${n.img}" alt="..." />\n                    <h4>${n.name}</h4>\n                    <p class="text-muted">${n.function}</p>\n                    <a class="btn btn-primary btn-social mx-2" href="${n.instagram}"><i class="fab fa-instagram"></i></a>\n                    <a class="btn btn-primary btn-social mx-2" href="${n.facebook}"><i class="fab fa-facebook-f"></i></a>\n                    <a class="btn btn-primary btn-social mx-2" href="${n.linkedIn}"><i class="fab fa-linkedin-in"></i></a>\n                </div>\n            </div>\n        `)}))},s=async function(e=0){const t=document.querySelector(".timeline");[{img:"entreprise.jpg",date:"2007-2017",title:"L'entreprise",text:"J’ai intégré le monde de l’entreprise après ma licence à l’âge de 23 ans. Il s’agissait d’une opportunité dans une grande entreprise qu’à l’époque je ne pouvais pas refuser.<br>Arrivée à la trentaine, je ne parvenais plus à trouver ma place dans ce monde qui ne me correspondait pas du tout. Je me sentais en perpétuel conflit avec moi-même et surtout prisonnière de ma vie professionnelle. Je devais faire semblant que tout allait bien, trouver la motivation pour faire des choses qui n’avaient aucun sens pour moi… difficile.<br>Mais comment trouver une issue à cette situation qui, à tout point de vue, était pourtant « confortable » : salariée d’une grande entreprise depuis près de 10 ans, 13ème mois, CE, salaire ? Une bonne situation. Stable. Alors pourquoi chercher à changer ? Surtout avec cette ancienneté et des enfants en bas âge à charge !"},{img:"sport.jpg",date:"Depuis toujours",title:"Le sport",text:"À ce moment-là, le sport tient déjà une place importante dans ma vie. Je prends le temps, à la pause déjeuner, d’aller faire du footing. Pourtant, cela ne suffit pas à empêcher mon mal-être de grandir. La frustration s’installe. Une sensation terrible de ne pas être à sa place, tandis que la société et ses injonctions me pressent à ne pas faiblir. À être une femme épanouie. À être une maman dévouée. Bien dans ses baskets. Peu à peu, je m’éloigne de mon bien-être intérieur et je me sens complètement démotivée."},{img:"declic.jpg",date:"2018",title:"Le déclic",text:"En 2018 je décide de retrouver la motivation et je me lance un défi : courir le marathon de Paris. Je mets toutes les chances de mon côté en suivant un plan d’entrainement strict et une préparation minutieuse. Et une semaine avant la course, patatras : grosse entorse à la cheville ! Qu’à cela ne tienne, je vais malgré tout relever ce challenge. Et je le fais. Je puise en moi toutes les ressources physiques et mentales et je parviens à franchir la ligne d’arrivée.<br>Cet accomplissement sportif a été un déclic : on a la force en nous de sortir de notre zone de confort et de relever d’immenses défis, malgré l’adversité !"},{img:"vocation.jpg",date:"2018-aujourd'hui",title:"La vocation",text:"Je décide alors de me prendre main. Cela passe par un accompagnement afin que l’on m’aide à donner un autre sens à ma vie professionnelle et, pourquoi pas, à s’engager dans un changement de vie.<br>Des idées émergent : une activité en lien avec ce qui m’anime le plus, l’alimentation, le sport, l’humain. Tout cela sonne comme une évidence pour moi. Je dois prendre un virage, suivre ma vocation, me tourner vers un métier d’accompagnement.<br>L’alimentation est un sujet qui me passionne depuis que je suis maman. Il fait partie de mon quotidien. « Bien manger ».<br>Le sport m’aide à me surpasser et à repousser mes limites.<br>Le développement personnel est un état d’esprit qui m’aide à mieux me connaitre et comprendre les autres.<br>À l’issue de cet accompagnement, j’ai compris que je pouvais faire de belle chose en étant moi-même et en étant à l’écoute de mes besoins. Je fonce alors, avec pour objectif de redonner un sens à ma vie !<br>Je me forme au métier de coaching, un métier d’accompagnement, c’est-à-dire accompagner les personnes dans le changement, la transition professionnelle ou personnelle. Je veux être plus proche de l’humain, aider ces personnes à se réaliser en allant puiser au fond d’elles toutes les ressources dont elles disposent déjà, à se libérer émotionnellement.<br>Je contribue ainsi, à mon niveau, au bien-être des autres. Je me sens alignée avec les valeurs qui me sont chères : authenticité, générosité, pugnacité, respect de soi.<br>En tant que coach, j’accompagne les personnes afin qu’elles apprennent à mieux se connaitre pour révéler tout leur potentiel."}].forEach(((e,n)=>{t.insertAdjacentHTML("beforeend",`\n            <li${n%2==1?' class="timeline-inverted"':""}>\n                <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/${e.img}"\n                        alt="..." /></div>\n                <div class="timeline-panel">\n                    <div class="timeline-heading">\n                        <h4>${e.date}</h4>\n                        <h4 class="subheading">${e.title}</h4>\n                    </div>\n                    <div class="timeline-body">\n                        <p class="text-muted">${e.text}</p>\n                    </div>\n                </div>\n            </li >\n        `)}));const n=document.querySelector(".timeline").querySelectorAll("li"),s=new IntersectionObserver((function(t,n){t.forEach((t=>{t.isIntersecting&&setTimeout((()=>{t.target.classList.add("in"),n.unobserve(t.target)}),e)}))}),{root:null,threshold:0,rootMargin:"55px"});n.forEach((function(e){s.observe(e)}))};window.addEventListener("DOMContentLoaded",(async()=>{await Promise.all([n(),t(),s(),e()]),function(e=0){const t=document.querySelectorAll("img"),n=new IntersectionObserver((function(t,n){t.forEach((t=>{t.isIntersecting&&setTimeout((()=>{t.target.src=t.target.dataset.src?t.target.dataset.src:t.target.src,t.target.addEventListener("load",(function(){this.classList.add("reveal")})),n.unobserve(t.target)}),e)}))}),{root:null,threshold:0,rootMargin:"55px"});t.forEach((function(e){n.observe(e)}))}(),function(){const e=document.querySelector(".masthead"),t=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];setInterval((()=>{e.style.backgroundImage=`url('../assets/img/header/bw/${t[Math.floor(Math.random()*t.length)]}')`}),5e3)}();var a=function(){const e=document.body.querySelector("#mainNav");e&&(0===window.scrollY?e.classList.remove("navbar-shrink"):e.classList.add("navbar-shrink"))};a(),document.addEventListener("scroll",a),document.body.querySelector("#mainNav")&&new bootstrap.ScrollSpy(document.body,{target:"#mainNav",offset:74});const i=document.body.querySelector(".navbar-toggler");[].slice.call(document.querySelectorAll("#navbarResponsive .nav-link")).map((function(e){e.addEventListener("click",(()=>{"none"!==window.getComputedStyle(i).display&&i.click()}))}))})),new class{#e;#t=13;#n;#s=[47.658236,-2.760847];#a=document.getElementById("locate");constructor(){this._loadMap(this.#s),this._addLocateHandler()}_loadMap(e){this.#e=L.map("map").setView(e,this.#t),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:20,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.#e),this.#n=this._addMarker(this.#s,"Sabrina Appriou")}_addMarker(e,t){const n=L.icon({iconUrl:"../assets/img/marker.png",iconSize:[48,48]});return L.marker(e,{icon:n}).addTo(this.#e).bindPopup(L.popup({offset:[0,-15],maxWidth:250,minWidth:100,autoClose:!1,closeOnClick:!1,className:"custom-popup"})).setPopupContent(t).openPopup()}_addLocateHandler(){this.#a.addEventListener("click",(()=>{this.#e.flyTo(this.#s,this.#t),this.#n.openPopup()}))}}})();