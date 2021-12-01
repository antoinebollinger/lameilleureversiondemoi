'use strict';

import View from "./View";

class Mappy extends View {
    #map;
    #mapZoomLevel = 13;
    #home;
    #homeCoords = [47.658236, -2.760847];
    #locate = document.getElementById('locate');

    constructor() {
        super();
        this._loadMap(this.#homeCoords);
        this._addLocateHandler();
    }

    _loadMap(coords) {
        this.#map = L.map('map', { scrollWheelZoom: false }).setView(coords, this.#mapZoomLevel);
        L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
            maxZoom: 20,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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

export default new Mappy();