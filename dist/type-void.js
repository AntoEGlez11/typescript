"use strict";
function showInfo(user) {
    console.log('User Info', user.id, user.username, user.firtsname);
    // if (1 === 1) {
    //     return;
    // }
    // console.log('hello');
    // return;
}
showInfo({ id: 11, username: 'Antonio', firtsname: 'Estrada' });
// tipo Inferido
function showFormattedInfo(user) {
    console.log('User Info', "\n      id: " + user.id + "\n      username: " + user.username + "\n      firtsname: " + user.firtsname + "\n  ");
}
showFormattedInfo({ id: 11, username: 'Antonio', firtsname: 'Estrada' });
// tipo void como tipo de dato en variable
var unusable;
unusable = null;
unusable = undefined;
// tipo: Never
function handlerError(code, message) {
    // Procesamiento de codigo
    //Generamos un mensaje
    throw new Error(message + ". Code: " + code);
}
try {
    handlerError(404, 'Not found');
}
catch (error) {
}
function sumNumbers(limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
}
sumNumbers(10);
