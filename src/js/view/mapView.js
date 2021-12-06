'use strict';

import View from "./View";

class Mappy extends View {
    #goToHome = document.getElementById('goToHome');
    #goToCurrent = document.getElementById('goToCurrent');
    #distance = document.getElementById('distance');
    #mapZoomLevel = 15;
    #map;
    #home;
    #current;
    #homeCoords = [47.658236, -2.760847];
    #currentCoords;

    constructor() {
        super();
        this._getCurrentCoords();
    }

    _loadMap(current = false) {
        this.#map = L.map('map', { scrollWheelZoom: true }).setView(this.#homeCoords, this.#mapZoomLevel);
        L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
            maxZoom: 20,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);
        this.#home = this._addMarker(this.#homeCoords, 'Sabrina Appriou', 'tertary');
        if (!current) return;
        this.#current = this._addMarker(this.#currentCoords, 'Vous');
        let group = new L.featureGroup([this.#home, this.#current]);
        this.#map.fitBounds(group.getBounds(), { padding: [50, 50] });
        this._addLocateHandler({ button: this.#goToHome, marker: this.#home, coords: this.#homeCoords });
        this._addLocateHandler({ button: this.#goToCurrent, marker: this.#current, coords: this.#currentCoords });
        this.#distance.insertAdjacentHTML('afterbegin', `<i class="fas fa-people-arrows"></i> Distance estimée : ${this._calculateDistance(this.#current.getLatLng(), this.#home.getLatLng())} km`)
    }

    _addMarker(coords, text, customStyle = 'primary') {
        const newMarker = L.icon({
            iconUrl: `../assets/img/markers/${customStyle}.png`,
            iconSize: [48, 48]
        });
        return L.marker(coords, { icon: newMarker })
            .addTo(this.#map)
            .bindPopup(L.popup({ offset: [0, 0], maxWidth: 250, minWidth: 100, autoClose: false, closeOnClick: false, className: customStyle }))
            .setPopupContent(text)
            .openPopup();
    }

    _getCurrentCoords() {
        navigator.geolocation.getCurrentPosition((pos) => {
            this.#currentCoords = [pos.coords.latitude, pos.coords.longitude];
            this._loadMap(true);

        }, () => { this._loadMap() });
    }

    _calculateDistance(from, to) {
        return ((from.distanceTo(to)).toFixed(0) / 1000).toFixed(0);
    }

    _addLocateHandler(ele) {
        ele.button.addEventListener('click', (e) => {
            e.preventDefault();
            this.#map.flyTo(ele.coords, this.#mapZoomLevel);
            ele.marker.openPopup();
        })
    }
};

export default new Mappy();