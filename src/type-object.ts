// type: object

let user: object;
user = {} //Object

user = {
  id: 1,
  username: 'Antonio',
  firstname: 'Estrada',
  isPro: true
}

console.log('user', user);
//Objerct vs object(clase JS vs tipo TS)
const myObject = {
  id: 1,
  username: 'Antonio',
  firstname: 'Estrada',
  isPro: true
};

const isInstance = myObject instanceof Object; //clase Object JS
console.log('isInstance', isInstance);

console.log('user.username', myObject.username);

