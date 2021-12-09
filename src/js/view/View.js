'use strict';
import { HTML_FOLDER } from "../config";

export default class View {
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