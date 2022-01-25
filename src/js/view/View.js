'use strict';
import { HTML_FOLDER } from "../config";

export default class View {
    navbarCollapsible = document.getElementById('mainNav');
    masthead = document.querySelector('.masthead');
    workContainer = document.getElementById('myWork');
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

    _toNode(html) {
        return new DOMParser().parseFromString(html, 'text/html').body.childNodes[0];
    }

    _getAge(birthDate = '1984-08-24') {
        return Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);
    }

    renderModal(message = '', title = 'Sabrina Coaching indique :') {
        const modalContainer = document.createElement('div');
        modalContainer.insertAdjacentHTML('afterbegin', `
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>${message}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Fermer</button>
                  </div>
                </div>
            </div>
        `);
        modalContainer.className = 'modal fade';
        return new bootstrap.Modal(modalContainer);
    }
};