#Map - Filter - Reduce

Map, Filter, and Reduce are useful array iteration methods. 

An array iteration method is a method that operates on every item inside an array.

Map, filter, and reduce do not alter the original array. They either create a new array based on the old one, or they generate a value from the old array.

## Reviewing .forEach()

We've already seen one array iteration method, .forEach()

.forEach iterates over an array, doing something to it. That something is defined by the function you pass into the method. At its simplest, it can be used to output the array values, but usually you want to do something in addition to that.

```
var output = "";
var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
```

the function passed to forEach can take 3 parameters
the item it's iterating over
the index of the item
the array itself

```
prices.forEach(function(item){
    console.log(item);
});
```

to output to the browser we need to concatenate the html
otherwise it will overwrite itself each time

```
prices.forEach(function(item){
   output = output + "<p>" + item + "</p>";
   $("#output").html(output);
});
```

usually we want to do some more things to it to make it more useful

```
prices.forEach(function(item, index){
    var tax = (item * 0.0825).toFixed(2);
    var total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
    output = output + "<p>Item number " + (index + 1) + ". Price: $" + item + ". Tax: $" + tax + ". Total: $" + total + ".</p>";
    $("#output").html(output);
});
```

## .map()

.map is similar in that it takes a function, which itself takes up to 3 arguments, the item itself, the item's index, and the array

```
var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
var pricesAfterTax = [];

pricesAfterTax = prices.map(function(item){
    var tax = (item * 0.0825).toFixed(2);
    var total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
    return parseFloat(total);
});

var output = "";
pricesAfterTax.forEach(function(item){
    output = output + "<p>" + item + "</p>";
    $("#output").html(output);
});
```

You can do string operations, of course

```
let things = ["book", "pencil", "marker", "eraser"];
let pluralThings = things.map(function(item){
    item = item + 's';
    return item;
});

var output = "";
pluralThings.forEach(function(item, index){
    if (index === 0) {
        output = "<p>You must bring the following items:</p>";
        output = output + "<p>" + item + "</p>";
    } else {
        output = output + "<p>" + item + "</p>";
    }
    $("#output").html(output);
});
```

Perhaps most useful is to extract relevant items from object arrays

```
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

const mileages = cars.map(function(car){
   return car.mileage;
});

let output = "";
mileages.forEach(function(item){
    output = output + "<p>" + item + "</p>";
    $("#output").html(output);
});

```

## The filter method

Equally useful in this sense is the .filter() method

// The filter method again creates a new array and does not alter the original array.  It also takes a function, and that function can take three arguments, the item, the item's index, and the array itself

```
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

const under10K = cars.filter(function(car){
    return car.mileage < 10000;
});

var output = "";
under10K.forEach(function(car){
    output = output + "<p>I found a " + car.make + " " + car.model + " with " + car.mileage + " miles.</p>";
    $("#output").html(output);
});
```

You can chain filter and map

```
var output = "";
var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

var affordablesWithTax = prices.filter(function(price){
    return price < 10;
}).map(function(price){
    var tax = (price * 0.0825).toFixed(2);
    var total = (parseFloat(price) + parseFloat(tax)).toFixed(2);
    return parseFloat(total);
});

affordablesWithTax.forEach(function(item){
    output = output + "<p>" + item + "</p>";
    $("#output").html(output);
});
```

## The Reduce Method

The .reduce() method is different, because the purpose of the function you pass to it is to reduce the array to one value. The most common use scenario is to find a total.

```
var totalCost = affordablesWithTax.reduce(function(total, itemPrice){
    return total + itemPrice;
});

$("#output").after("<p>The total is " + totalCost + "</p>");
```

Unlike the previous array iterators, .reduce() can take up to four parameters -- the first is a parameter called "total" which is an accumulator. By default it is set to the value of the first element in the array. The other three are similar to .forEach, .map, and .filter -- the usual item, item index, and the array itself.

Here, total is like declaring var total = arrayElement[0]
total = total + itemPrice
return total

We can examine the workings of this if we give ourselves some output during the iteration
```
var totalCost = affordablesWithTax.reduce(function(total, itemPrice, index){
    console.log(`The index is ${index}, the total is ${total}, the itemPrice is ${itemPrice}`);
    return total + itemPrice;
});


```

We finally have a use scenario where the array is a useful argument

```
var averagePrice = affordablesWithTax.reduce(function(total, itemPrice, index, array){
    total = total + itemPrice;
    //console.log(total);
    if (index === array.length - 1){
        return total/array.length;
    } else {
        return total;
    }
});

$("#output").append("<p>The average price is " + averagePrice.toFixed(2) + "</p>");
```

Notice that we need a return on every iteration through the array elements. Otherwise nothing gets passed on to the next iteration of the loop.

```
var totalCost = affordablesWithTax.reduce(function(total, itemPrice, index){
    console.log("on iteration " + (index + 1) + " through the array the item price is " + itemPrice + " and the total is " + total);

    total =  total + itemPrice;

    if (index < 1){
        return total;
    }
});
```
```
var totalCost = affordablesWithTax.reduce(function(total, itemPrice, index){
    console.log("on iteration " + (index + 1) + " through the array the item price is " + itemPrice + " and the total is " + total);

    total =  total + itemPrice;

    if (index < 2){
        return total;
    }
});
```
```
var totalCost = affordablesWithTax.reduce(function(total, itemPrice, index){
    console.log("on iteration " + (index + 1) + " through the array the item price is " + itemPrice + " and the total is " + total);

    total =  total + itemPrice;

    if (index < 3){
        return total;
    }
});
```

So this is why, in the averaging scenario, and in fact in all uses of .reduce, we must return 

So, basically, what we are doing in the averaging .reduce() is, on every iteration we are returning the total, as it is usually used; but at the very end it averages before returning.

A lot of applications of the .reduce method, though, work with the potential to assign the function a custom initial total. So, at its simplest, you can make it start from somewhere that is not 0. Let's go back to our basic prices array

```
var output = "";
var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

prices.forEach(function(price, index){
    output = output + "<p>Item number " + (index + 1) + ", price: $" + price + "</p>";
    $("#output").html(output);
});

var total = prices.reduce(function(total, price){
    return total + price;
});

$("#output").append("<p>The total is: $" + total + ".</p>");
```

But we could also start from non-zero by passing the reduce method a second argument. In this case, "total" begins at whatever we decide it begins at. We can begin counting at any number, not just the value of the first one

```
$("#output").before("<p>You already have $158.76 in your cart</p>");

prices.forEach(function(price, index){
    output = output + "<p>Item number " + (index + 1) + ", price: $" + price + "</p>";
    $("#output").html(output);
});

var total = prices.reduce(function(total, price){
    return total + price;
}, 158.76);

$("#output").append("<p>The total is: $" + total.toFixed(2) + ".</p>");
```

Interesting things happen, though, when instead of declaring a number as the beginning of the reduction, we declare an empty object or array. One use scenario is tallying the numbers of different things in an array. We can produce a tally like this.

```
const aesopAnimals = ["Ant", "Grasshopper", "Ape", "Fox", "Donkey", "Donkey", "Donkey", "Lion", "Fly", "Bear", "Beaver", "Blackbird", "Wolf", "Bull", "Lion", "Cat", "Mouse", "Crab", "Fox", "Rooster", "Rooster", "Dog", "Fox", "Crow", "Crow", "Sheep", "Crow", "Snake", "Deer", "Dog", "Dog", "Sheep", "Dog", "Wolf", "Dog", "Lion", "Dove", "Ant", "Eagle", "Fox", "Eagle", "Stork", "Viper", "Fish", "Fly", "Ant", "Fly", "Snake", "Fox", "Crow", "Fox", "Fox", "Lion", "Fox", "Fox", "Lion", "Fox", "Stork", "Fox", "Weasel", "Fox", "Fly", "Hedgehog", "Hare", "Frog", "Fox", "Frog", "Mouse", "Frog", "Ox", "Frog", "Frog", "Goat", "Goose", "Hare", "Horse", "Donkey", "Horse", "Kite", "Dove", "Lion", "Lion", "Lion", "Lion", "Bear", "Fox", "Lion", "Boar", "Vulture", "Dog", "Mouse", "Oyster", "Donkey", "Ox", "Kite", "Snake", "Crab", "Snake", "Snake", "Tortoise", "Tortoise", "Hare", "Cat", "Wolf", "Wolf", "Lamb", "Swallow", "Tortoise"];
```
```
let aesopsAnimalsCounted = aesopAnimals.reduce(function(total, animal){
// total begins as an empty object.
// the animal parameter represents each item in the array, as it is passed to the reduce function iterating through the array. So on its first pass, it is "Bear", then "Beaver", then "Ant"
// Since "total" is an empty object, on the first pass this code sets a key called Bear, and its value is 1. Then Beaver: 1. Then Ant: 1.
// Just like this, this code would create an array of each distinct animal with each value set to 1
total[animal] = 1;
return total;
}, {});
```

```
for (var animal in aesopsAnimalsCounted) {
    $("#output").append(animal + ": " + aesopsAnimalsCounted[animal] + "<br>");
}
```

now I add a decision
if that key doesn't exist yet, create it and set its value to 1
if that key does exist, add 1 to the value

```
let aesopsAnimalsCounted = aesopAnimals.reduce(function(total, animal){
    if (!total[animal]){
        total[animal] = 1;
    } else {
        total[animal] = total[animal] + 1;
    }
    return total;
}, {});
```
```
for (var animal in aesopsAnimalsCounted) {
$("#output").append(animal + ": " + aesopsAnimalsCounted[animal] + "<br>");
}
```

We can sort the results, thus:
```
const aesopsAnimalsCountedAndSorted = Object.entries(aesopsAnimalsCounted).sort(function(a, b){return b[1]-a[1]});

for (let i = 0; i < aesopsAnimalsCountedAndSorted.length; i++){
    $("#output").append(
      aesopsAnimalsCountedAndSorted[i][0] + ": " + aesopsAnimalsCountedAndSorted[i][1] + "<br>"
    );
}
```

So much for an example of starting with an object. What about an array?

Let's say we have an array of objects. We are familiar with this data structure now from JSON and AJAX. Something like our cars array

```
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
];
```

Now it is fairly straightforward to make the accumulator variable in the reduce function an empty array. The item passed on each occasion is a car object. So, on each iteration through the cars array we push the mileage property into the accumulator, which is an empty array, and we return the array after it has the mileage pushed. By this means, at the end of the reduce iteration, we have an array of mileages

```
const mileages = cars.reduce(function(accumulator, car){
accumulator.push(car.mileage);
return accumulator;
}, []);

console.log(mileages);
```

Now, if we were to, say, want to extract one value, we could go back to the technique of using an if-else statement to carry out a different operation on the last iteration. To do this we need to pass all four parameters to the reduce function

so now let's pass the index and array parameters into the reduce function

```
const highestMileage = cars.reduce(function(accumulator, car, index, carsArray){
if (index === carsArray.length-1){
accumulator.push(car.mileage);
accumulator.sort(function(a, b){return b-a});
return accumulator[0];
} else {
accumulator.push(car.mileage);
return accumulator;
}
}, []);

console.log(highestMileage);
```

Here, we are doing the exact same thing as in the previous example, pushing the mileage into the accumulator, which has been declared as an empty array. So, as the reduce function iterates through the cars array, it starts to push the mileages into this empty array we declared as the accumulator variable. On our final iteration through the cars array, which we signal by matching the index to the length of the cars array minus one, we start out doing the same thing: push the mileage into the accumulator array. But then we run a sort function on the accumulator array, which puts them in descending order, and we return only the first item in the array, which must be the highest value since we just sorted it so the highest value would be first. And now we have the highest mileage.

We could do this differently, with a reduce within a reduce. Since our accumulator is an array, on our last iteration we can run a reduce function on it. This is a standard reduce function that takes, by default, the first value in the array as the initial accumulator variable. It then takes each mileage stored in that accumulator array. The function we run here simply uses Math.max to compare the two values passed to reduce on each iteration, and return the highest one. This will compare 10428 to 9425 and return 10428, then compare 10428 to 2567 and return 10428, then compare 10428 to 14500 and return 14500, finally compare 14500 to 11248 and return 14500. Then we return the value stored as a variable resulting from that reduce within the reduce, and we also arrive at the highest mileage in the cars array.

```
const highestMileage = cars.reduce(function(accumulator, car, index, carsArray){
    if (index === carsArray.length-1){
        accumulator.push(car.mileage);
        var maxMileage = accumulator.reduce(function(accumulator, mileage){
            return Math.max(accumulator, mileage);
        });
        return maxMileage;
    } else {
        accumulator.push(car.mileage);
        return accumulator;
    }
}, []);

console.log(highestMileage);
```

Using this technique, we can do all kinds of things on that last iteration of the reduce method through the array

```
var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

var highLowPrices = prices.reduce(function(accumulatorArray, price, index, pricesArray){
    if (index === pricesArray.length-1){
        accumulatorArray.push(price);
        var returnArray = [];
        accumulatorArray.sort(function(price1, price2){
            return price1 - price2;
        });
        var lowestPrice = accumulatorArray[0];
        var highestPrice = accumulatorArray[accumulatorArray.length-1];
        returnArray.push(lowestPrice);
        returnArray.push(highestPrice);
        return returnArray;
    } else {
        accumulatorArray.push(price);
        return accumulatorArray;
    }
}, []);

console.log(highLowPrices);
```

Note the other array iteration methods we did not go through today: 

[Array Iteration Methods](https://www.w3schools.com/JS/js_array_iteration.asp)

.reduceRight()
reduces from right to left

.every() 
checks if all array values pass a test

.some()
checks if some array values pass a test

.indexOf()
searches the array for a value and returns its position
returns the first occurrence if there are more than one

.lastIndexOf()
returns the position of the last occurrence of a value

.find()
returns the value of the first array element that passes some test

.findIndex()
returns the index of the first array element to pass some test


