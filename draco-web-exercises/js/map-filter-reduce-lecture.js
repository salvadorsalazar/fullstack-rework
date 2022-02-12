// Array Iteration Methods = methods that operate on every item inside an array.

// Map, filter, reduce do not alter the original array (does not the mutate the array)
// either create a new array from the old one, OR generate a value based on the old array

// forEach review

// let output = "";
// let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

// prices.forEach((item)=>{
//     console.log(item);
// });

// prices.forEach((item) => output += `<p>${item}</p>`);
// $("#output").html(output);

// prices.forEach((item, index) => {
//     let tax = (item * 0.0825).toFixed(2);
//     let total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
//     output += `<p>Item number ${index + 1}. Price: $${item}. Tax: $${tax}. Total: $${total}.</p>`;
// });
// $("#output").html(output);

// .map()

// let pricesAfterTax = [];

// let pricesAfterTax = prices.map((item) => {
//     let tax = (item * 0.0825).toFixed(2);
//     let total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
//     return parseFloat(total);
// });
// let output = "";
// pricesAfterTax.forEach((item)=>output+=`<p>${item}</p>`);
// $("#output").html(output);

let things = ["book", "pencil", "marker", "eraser"];
// var pluralThings = things.map(function(item){
//     item = item + 's';
//     return item;
// });

// let pluralThings = things.map((item) => `${item}s`);
// let output = "";
// pluralThings.forEach((item, index)=>{
//     if (index === 0) {
//         output = "<p>You must bring the following items:</p>";
//         output += `<p>${item}</p>`;
//     } else {
//         output += `<p>${item}</p>`;
//     }
// });
// $("#output").html(output);

// let pluralThings = things.map((item) => `${item}s`);
// let output = "";
// pluralThings.forEach((item, index)=> index === 0 ? output += `<p>You must bring the following items:</p><p>${item}</p>` : output += `<p>${item}</p>`);
// $("#output").html(output);


// const cars = [
//     {
//         make: "Honda",
//         model: "Civic",
//         mileage: 10428
//     },
//     {
//         make: "Toyota",
//         model: "Corolla",
//         mileage: 9425
//     },
//     {
//         make: "Ford",
//         model: "Mustang",
//         mileage: 2567
//     },
//     {
//         make: "Audi",
//         model: "A3",
//         mileage: 14500
//     },
//     {
//         make: "Mazda",
//         model: "3",
//         mileage: 11248
//     }
// ];

// const mileages = cars.map( car => car.mileage );

// const mileages = cars.map(function(car){
//     return car.mileage;
// });

// let output = "";
// mileages.forEach( item => output += `<p>${item}</p>` );
// $("#output").html(output);

// .filter()

// const under10K = cars.filter(car => car.mileage < 10000 );

// const under10K = cars.filter(function(car){
//    if (car.mileage < 10000) {
//        return true;
//    } else {
//        return false;
//    }
// });

// var output = "";
// under10K.forEach(function(car){
//     output = output + "<p>I found a " + car.make + " " + car.model + " with " + car.mileage + " miles.</p>";
//     $("#output").html(output);
// });

// let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
// let affordablesWithTax = prices.filter( price => price < 10).map(price => {
//     let tax = (price * 0.0825).toFixed(2);
//     let total = (parseFloat(price) + parseFloat(tax)).toFixed(2);
//     return parseFloat(total);
// });

// let affordablesWithTax = prices.filter( price => price < 10).map(price =>
//     parseFloat((parseFloat(price) + parseFloat((price * 0.0825).toFixed(2))).toFixed(2))
// );
// let output = "";
// affordablesWithTax.forEach(function(item){
//     output = output + "<p>" + item + "</p>";
//     $("#output").html(output);
// });


//===========================.reduce()==================

// let totalCost = affordablesWithTax.reduce((total, indivItemCost) => total + indivItemCost );


// var totalCost = affordablesWithTax.reduce(function(total, itemPrice){
//     return total + itemPrice;
// });

// let totalCost = affordablesWithTax.reduce((total, indivItemCost, index) => {
//     console.log(`The index is ${index}, the total is ${total}, the itemCost is ${indivItemCost}`);
//     return total + indivItemCost;
// });
//
// let averagePrice = affordablesWithTax.reduce((total, indivItemCost, index, array) => {
//     total = total + indivItemCost;
//     if (index === array.length - 1) {
//         return total/array.length;
//     } else {
//         return total;
//     }
// });

// let averagePrice = affordablesWithTax.reduce((total, indivItemCost, index, array) =>
//   (index === array.length - 1 ? (total + indivItemCost)/array.length : total + indivItemCost)
// );

// let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
// var total = prices.reduce(function(total, price, index){
//     console.log(`The index is ${index}, the total is ${total}, the itemCost is ${price}`);
//     return total + price;
// }, 158.76);

// const aesopAnimals = ["Ant", "Grasshopper", "Ape", "Fox", "Donkey", "Donkey", "Donkey", "Lion", "Fly", "Bear", "Beaver", "Blackbird", "Wolf", "Bull", "Lion", "Cat", "Mouse", "Crab", "Fox", "Rooster", "Rooster", "Dog", "Fox", "Crow", "Crow", "Sheep", "Crow", "Snake", "Deer", "Dog", "Dog", "Sheep", "Dog", "Wolf", "Dog", "Lion", "Dove", "Ant", "Eagle", "Fox", "Eagle", "Stork", "Viper", "Fish", "Fly", "Ant", "Fly", "Snake", "Fox", "Crow", "Fox", "Fox", "Lion", "Fox", "Fox", "Lion", "Fox", "Stork", "Fox", "Weasel", "Fox", "Fly", "Hedgehog", "Hare", "Frog", "Fox", "Frog", "Mouse", "Frog", "Ox", "Frog", "Frog", "Goat", "Goose", "Hare", "Horse", "Donkey", "Horse", "Kite", "Dove", "Lion", "Lion", "Lion", "Lion", "Bear", "Fox", "Lion", "Boar", "Vulture", "Dog", "Mouse", "Oyster", "Donkey", "Ox", "Kite", "Snake", "Crab", "Snake", "Snake", "Tortoise", "Tortoise", "Hare", "Cat", "Wolf", "Wolf", "Lamb", "Swallow", "Tortoise"];
//
// let aesopsAnimalsCounted = aesopAnimals.reduce((total, animal) => {
//     if (!total[animal]) {
//         total[animal] = 1;
//     } else {
//         total[animal] += 1;
//     }
//     console.log(`${animal}: ${total[animal]}`);
//     console.log(total);
//     return total;
// }, {});
//
// // when I do total[animal] = 1, I create a key-value pair ant: 1
//
// const aesopsAnimalsCountedAndSorted = Object.entries(aesopsAnimalsCounted).sort(function(a, b){return b[1]-a[1]});
//
// for (let i = 0; i < aesopsAnimalsCountedAndSorted.length; i++){
//     $("#output").append(
//         aesopsAnimalsCountedAndSorted[i][0] + ": " + aesopsAnimalsCountedAndSorted[i][1] + "<br>"
//     );
// };

const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

const mileages = cars.reduce((accumulator, car) => {
   accumulator.push(car.mileage);
   return accumulator;
}, []);
// let accumulator = [];
// accumulator = [10428];
// accumulator = [10428, 9425]
// accumulator = [10428, 9425, 2567] etc.

// const highestMileage = cars.reduce((accumulator, car, index, carsArray) => {
//     if (index === carsArray.length -1) {
//         accumulator.push(car.mileage);
//         accumulator.sort((a,b) => b-a);
//         return accumulator[0];
//     } else {
//         accumulator.push(car.mileage);
//         return accumulator;
//     }
// }, []);

const highestMileage = cars.reduce((accumulator, car, index, carsArray)=>{
    if (index === carsArray.length -1) {
        accumulator.push(car.mileage);
        let maxMileage = accumulator.reduce((mileage1, mileage2) => Math.max(mileage1, mileage2));
        return maxMileage;
    } else {
        accumulator.push(car.mileage);
        return accumulator;
    }
},[]);

let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
let highLowPrices = prices.reduce((accumulatorArray, price, index, pricesArray)=>{
   if (index === pricesArray.length-1){
       accumulatorArray.push(price);
       let returnArray = [];
       accumulatorArray.sort((price1, price2)=>price1-price2);
       let lowestPrice = accumulatorArray[0];
       let highestPrice = accumulatorArray[accumulatorArray.length-1];
       returnArray.push(lowestPrice);
       returnArray.push(highestPrice);
       return returnArray;
   } else {
       accumulatorArray.push(price);
       return accumulatorArray;
   }
}, []);






