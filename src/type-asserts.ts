export {};
// <tipo> //Angle Bracket syntax
let username: any;
username = 'antonio';

//tenemos una cadena // TS confia en mi
let message: string = (<string>username).length > 5 ?
                      `Welcome ${username}`:
                      'Username is too short';
console.log('message', message);

let userNameWithId : any ='Antonio 1';
//como obtener el username
username = (<string>userNameWithId).substring(0,10);
console.log('Username Only', username);

// sintaxis "as"
message = (username as string).length > 5 ?
                      `Welcome ${username}`:
                      'Username is too short';

let helloUser : any = 'hola antonio';
username = (helloUser as string).substring(6);
console.log('username', username);