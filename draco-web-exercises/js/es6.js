// "use strict";

// let for variables that are expected to change in value
// const for values that are not expected to change or that shouldn't change

// let first
// a few differences between let and var

{
    var name = 'salazar';
}

console.log(name);

{
    let lastName = 'sa,'
}

let lastName = 'kuna';
console.log(lastName);

while (true) {
    var name = 'salvadr';
    break;
}

console.log(name);

let name = 'Ben Quadrinaros';

while (true) {
    let name = 'angela';
    break;
}

console.log(name);

let name = 'jojo';
if (true) {let name = 'ben';}
console.log(name);

var name = 'jojo';
if (true) {var name = 'ben';}
console.log(name);

let anotherName = 'ben';

function scopeTester(){
    var anotherName = 'sal';
    let anotherName = 'sal';
    anotherName = 'sal';
}
scopeTester();
console.log(anotherName);

// TEMPLATE LITERALS

let name = 'salvador';
let job = 'programmer';
let place = 'san antonio';

// old way
console.log(name + ' is a ' + job + ' in ' + place);

// new way
console.log(`${name} is a ${job} in ${place}`);

// Object Destructuring

const car = {
    make: "Toyota",
    model: "corolla",
    year: 2020,
    mileage: 62345
}

const car2 = {
    make: "Ford",
    model: "Ranger",
    year: 2018,
    mileage: 17647
}

let make = car.make;
let model = car.model;

const {make, model, year, mileage} = car;
console.log(`I spy a ${year} ${make} ${model} with ${mileage} miles`);

car.model = 'Tundra';

console.log(car.model);

const bicycle = {
    make: "huffy"
}

car.tonneau = false;

if (car.tonneau) {
    console.log("That toyota has a tonneau");
} else {
    console.log("You're gonna get rain in there. And leaves.");
}

car = bicycle;

// Arrow Functions

const add = (num1, num2) => num1 + num2;
console.log(add(25, 7));

// traditional function expression
// variable declaration keyword
// variable name
// assignment operator
// function keyword
// parameters
// code block
// inside the code block, the return statement
var addition = function(num1, num2){
    return num1 + num2;
}

// new function expression with arrow syntax
const sum = (num1, num2) => num1 + num2;

// if parameters === 1 {no parentheses needed}
const addTen = number => number + 10;

if parameters === 0 {use empty parentheses}
const helloWorld = ()=>"Hello World";
console.log(helloWorld());

const doSomething = number => {
    if (number > 100){
        console.log("big");
    } else {
        console.log("small");
    }
}

// you can declare default values for function parameters
// const addSomethingSpecific = (augend, addend = 25) => augend + addend;
// console.log(addSomethingSpecific(50));

// you can destructure objects within the parameters

// const outputCar = ({make, model, year, mileage} = car) => `I spy a ${year} ${make} ${model} with ${mileage} miles`;

// for...of loop

// allows you to iterate over data types that are defined as iterable objects -- strings and arrays, as well as nodeLists. But not regular objects.

// Iterate over an array
const instructors = ["sal", "angela", "scarlett", "aden"];
for (const name of instructors) {
    console.log(`${name} is  at salazar residence!`);
}

// Array with four elements
// First iteration: declares const name = "Javier"
//                  does console.log "Javier teaches at Codeup"
//                  const name goes to garbage collection
// Second iteration: declares const name = "Justin" etc.

// Iterate over a string
// for (const letter of 'Codeup'){
//     console.log(letter);
//     let theParagraphIJustCreated = document.createElement('p');
//     document.getElementsByTagName("body")[0].append(letter, theParagraphIJustCreated);
// }
// Simple alphabetic shift cipher
// let newString = '';
// for (const letter of 'Codeup'){
//     let charCode = letter.charCodeAt(0);
//     charCode++;
//     newString += String.fromCharCode(charCode);
// }
// console.log(newString);

// Difference of for...in and for...of

// for...in -- loop over the enumerable properties of an object
// for...of -- loop over the values of an iterable object

for (const index in instructors) {
    console.log(index);
}

for (const name of instructors) {
    console.log(name);
}

// To get the values in a for ... in loop

for (const index in instructors){
    console.log(`${index}: ${instructors[index]}`);
}

// Typical use of for...in: get keys and values from an object

for (const property in car) {
    console.log(`${property}: ${car[property]}`);
}