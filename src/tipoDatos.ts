console.log('prueba!');

// Number Explicit

let phone: number;
// phone = '+367128815'; --> Error de tipo
phone = 558784643;

// Number inferred
let phoneMovil = 553794673;
// let phoneMovil = true; --> Error esta definido antes

let hex: number = 0xf00d;
let binary: number = 0b101;
let octal: number = 0o744;

// Type: Boolean
let isPro: boolean;
isPro = true;
// isPro = 1; --> Error

// String
let username: string = 'AntoEGlez';
username = 'Antonio';
// username = true; --> Error

// Template String with use of back-tick ``
let userInfo: string;
userInfo = `
    User info:
    username: ${username}
    firtsname: ${username + ' anbreaker'}
    phoneMovi: ${phoneMovil}
    phone: ${phone}
    isPro: ${isPro}
`;

console.log('userInfo', userInfo);