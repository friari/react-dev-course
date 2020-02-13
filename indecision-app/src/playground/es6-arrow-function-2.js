// arguments object - no longer bound with arrow functions
// so if you need to use the arguments object stick with es5 functions

// const add = function (a, b) {
//     console.log(arguments)
//     return a + b;
// }

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
console.log(add(55,1));

// this keyword - no longer bound with arrow functions

const user = {
    name: 'Ari',
    cities: ['Sydney', 'Tel Aviv', 'Amsterdam', 'Berlin', 'New York'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    numbers: [15, 120, 70, 2],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}
console.log(multiplier.multiply());