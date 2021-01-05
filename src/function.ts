
//crear foto
// function createdPicture(title, date, size) {
//   // title
// }

type SquareSize = '100x100' | '500x500' | '1000x1000';
// Usar TS, definimos tipos para parametros
// function createdPicture(title: string, date: string, size: SquareSize) {
//   //se crea foto
//   console.log('create picture using', title, date, size);
// }

//Parametrs Opcionales
function createdPicture(title?: string, date?: string, size?: SquareSize) {
  //se crea foto
  console.log('create picture using', title, date, size);
}

createdPicture('Cumpleaños', '11-sep-1992', '100x100');
createdPicture('viaje', '2020-sep');

//flat array function
let createdPic = (title: string, date: string, size: SquareSize): object => {
  return {title,date,size}
};

const picture = createdPic('sesion','2020-sep', '100x100');
console.log('picture', picture);

//tipo de retorno con TS

function handlerError(code:number, message: string): never | string {
  //procesar codigo, mensaje
  if(message == 'error'){
    throw new Error(`${message}. Code error: ${code}`);
  } else {
    return 'Error ocurrido';
  }
}



try {
  let result = handlerError(200, 'OK');
  console.log('resultado', result);
  result = handlerError(404, 'error');
  console.log('resultado', result);
} catch (e) {

}