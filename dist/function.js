"use strict";
//crear foto
// function createdPicture(title, date, size) {
//   // title
// }
// Usar TS, definimos tipos para parametros
// function createdPicture(title: string, date: string, size: SquareSize) {
//   //se crea foto
//   console.log('create picture using', title, date, size);
// }
//Parametrs Opcionales
function createdPicture(title, date, size) {
    //se crea foto
    console.log('create picture using', title, date, size);
}
createdPicture('Cumpleaños', '11-sep-1992', '100x100');
createdPicture('viaje', '2020-sep');
//flat array function
var createdPic = function (title, date, size) {
    return { title: title, date: date, size: size };
};
var picture = createdPic('sesion', '2020-sep', '100x100');
console.log('picture', picture);
//tipo de retorno con TS
function handlerError(code, message) {
    //procesar codigo, mensaje
    if (message == 'error') {
        throw new Error(message + ". Code error: " + code);
    }
    else {
        return 'Error ocurrido';
    }
}
try {
    var result = handlerError(200, 'OK');
    console.log('resultado', result);
    result = handlerError(404, 'error');
    console.log('resultado', result);
}
catch (e) {
}
