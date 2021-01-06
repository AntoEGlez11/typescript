"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log("[title: " + picture.title + ",\n                date: " + picture.date + ",\n                orientation: " + picture.orientation + "]");
}
var myPic = {
    title: 'test',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: 'test',
    date: '2020-03',
    orientation: PhotoOrientation.Portrait
});
function generatePicture(config) {
    var pic = { title: 'default', date: '2020-03' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
var picture = generatePicture({});
console.log('PRUEBAS', picture);
var user;
user = { id: 10, username: 'antonio', isPro: true };
console.log('user', user);
user.username = 'estrada';
console.log('user', user);
// user.id = 50; //error
console.log('user', user);
