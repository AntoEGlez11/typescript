function showInfo(user: any): any {
  console.log('User Info',user.id, user.username, user.firtsname);
  // if (1 === 1) {
  //     return;
  // }
  // console.log('hello');
  // return;
}

showInfo({id:11, username: 'Antonio', firtsname: 'Estrada'});

// tipo Inferido

function showFormattedInfo(user:any) {
  console.log('User Info',`
      id: ${user.id}
      username: ${user.username}
      firtsname: ${user.firtsname}
  `);
}

showFormattedInfo({id:11, username: 'Antonio', firtsname: 'Estrada'})

// tipo void como tipo de dato en variable
let unusable: void;
unusable = null;
unusable = undefined;

// tipo: Never

function handlerError(code:number, message: string): never {
  // Procesamiento de codigo
  //Generamos un mensaje
  throw new Error(`${message}. Code: ${code}`);
}
try {
  handlerError(404, 'Not found');
} catch (error) {
}


function sumNumbers(limit:number): never {
  let sum = 0;
  while (true) {
    sum++;
  }
}

sumNumbers(10);

