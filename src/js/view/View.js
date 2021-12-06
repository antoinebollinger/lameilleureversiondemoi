'use strict';

export default class View {
    navbarCollapsible = document.getElementById('mainNav');
    masthead = document.querySelector('.masthead');
    programsContainer = document.getElementById('programsContainer');
    teamContainer = document.getElementById('team').querySelector('.row');
    aboutContainer = document.querySelector('.timeline');
    skillsContainer = document.getElementById('expertise');
    contactContainer = document.getElementById('contact');
    backToTop = document.getElementById('btn-back-to-top');


    async _getHtml(url) {
        const privacy = await fetch(url);
        if (!privacy.ok) return;
        const html = await privacy.text();
        return html;
    }
};