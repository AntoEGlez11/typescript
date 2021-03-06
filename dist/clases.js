"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var Picture = /** @class */ (function () {
    function Picture(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    //comportamiento
    Picture.prototype.toString = function () {
        return "[id: " + this.id + ",\n             title: " + this.title + ",\n             orientation: " + this.orientation + "]";
    };
    return Picture;
}());
var Album = /** @class */ (function () {
    function Album(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    Album.prototype.addPicture = function (picture) {
        this.pictures.push(picture);
    };
    return Album;
}());
var album = new Album(1, 'Personas');
var picture = new Picture(1, 'session 1', PhotoOrientation.Landscape);
album.addPicture(picture);
console.log('album', album);
//Accediendo a los miembros publicos
picture.id = 100;
picture.title = 'otro titulo';
album.title = 'actividades';
console.log('album', album);
