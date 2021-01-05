"use strict";
console.log('prueba!');
// Number Explicit
var phone;
// phone = '+367128815'; --> Error de tipo
phone = 558784643;
// Number inferred
var phoneMovil = 553794673;
// let phoneMovil = true; --> Error esta definido antes
var hex = 0xf00d;
var binary = 5;
var octal = 484;
// Type: Boolean
var isPro;
isPro = true;
// isPro = 1; --> Error
// String
var username = 'AntoEGlez';
username = 'Antonio';
// username = true; --> Error
// Template String with use of back-tick ``
var userInfo;
userInfo = "\n    User info:\n    username: " + username + "\n    firtsname: " + (username + ' anbreaker') + "\n    phoneMovi: " + phoneMovil + "\n    phone: " + phone + "\n    isPro: " + isPro + "\n";
console.log('userInfo', userInfo);
