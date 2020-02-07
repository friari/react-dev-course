var nameVar = 'Ari';
var nameVar = 'Bryce';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Poseidon';
console.log('nameLet', nameLet);

const nameConst = 'Skellington';
console.log('nameConst', nameConst);

const fullName = 'Ari Friedgut';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}