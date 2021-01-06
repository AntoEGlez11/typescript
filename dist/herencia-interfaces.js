"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var album = {
    id: 1, title: 'Soda Estereo', description: 'Eventos del mundo'
};
var picture = {
    id: 1, title: 'Familia', orientation: PhotoOrientation.Panorama
};
var newPicture = {};
newPicture.id = 5;
newPicture.title = 'luna';
console.log('album', album);
console.log('picture', picture);
console.log('newPicture', newPicture);
