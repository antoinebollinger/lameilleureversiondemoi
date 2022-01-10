'use strict';

import View from "./View";

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
        //this._init();
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

export default new Settings();