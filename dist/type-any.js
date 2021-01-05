"use strict";
// type Any --> For dynamic variables
// Explicit type
var idUser;
idUser = 1; // Number
idUser = '1'; // String
console.log('iduser ', idUser);
console.log(typeof idUser);
// Inferred type
var otherId;
otherId = '1';
otherId = 1;
// otherId = true;
console.log('otherId ', otherId);
console.log(typeof otherId);
var suprise = 'Hello typescript';
// suprise.sayHello(); // Error
var res = suprise.substring(6);
console.log("res " + res);
