'use strict';

import View from "./View";

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
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                this._getCurrentCoords();
            });
        };
        const contactObserver = new IntersectionObserver(callback, { root: null, threshold: 0.1 });
        contactObserver.observe(this.contactContainer);
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
        const group = [this.#home, this.#current];
        this.#distance.insertAdjacentHTML('afterbegin', `${this._calculateDistance(this.#current.getLatLng(), this.#home.getLatLng())} km`)
        this._goDistance(group);
        this._goFocusHandler(this.#goToHome, { marker: this.#home, coords: this.#homeCoords });
        this._goFocusHandler(this.#goToCurrent, { marker: this.#current, coords: this.#currentCoords });
        this._goDistanceHandler(this.#goDistance, group);
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

export default new Mappy();