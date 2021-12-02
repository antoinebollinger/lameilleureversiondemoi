'use strict';

export default class View {
    masthead = document.querySelector('.masthead');
    navbarCollapsible = document.getElementById('mainNav');
    teamContainer = document.getElementById('team').querySelector('.row');
    aboutContainer = document.querySelector('.timeline');
    skillsContainer = document.getElementById('expertise');
    programsContainer = document.getElementById('programsContainer');
    backToTop = document.getElementById('btn-back-to-top');

    async _getHtml(url) {
        const privacy = await fetch(url);
        if (!privacy.ok) return;
        const html = await privacy.text();
        return html;
    }
};