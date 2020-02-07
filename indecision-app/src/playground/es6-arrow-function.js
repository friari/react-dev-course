const square = function(x) {
    return x * x;
};

// const squareArrow = (x) => {
//     return x * x;
// }

const squareArrow = (x) => x * x;

console.log(squareArrow(9));

let firstName;

const getFirstName = (name) => {
    firstName = name.split(' ')[0];
}

const getFirstName2 = (name) => firstName = name.split(' ')[0];

getFirstName("Ari Friedgut");

console.log(firstName);

getFirstName2("Billison Green");

console.log(firstName);