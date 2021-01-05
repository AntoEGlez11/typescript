"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <tipo> //Angle Bracket syntax
var username;
username = 'antonio';
//tenemos una cadena // TS confia en mi
var message = username.length > 5 ?
    "Welcome " + username :
    'Username is too short';
console.log('message', message);
var userNameWithId = 'Antonio 1';
//como obtener el username
username = userNameWithId.substring(0, 10);
console.log('Username Only', username);
// sintaxis "as"
message = username.length > 5 ?
    "Welcome " + username :
    'Username is too short';
var helloUser = 'hola antonio';
username = helloUser.substring(6);
console.log('username', username);
