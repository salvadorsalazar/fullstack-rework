# ES 6

The official standard upon which JavaScript is based is called ECMAScript. ECMA stands for European Computer Manufacturers Association. ECMAScript isn't JavaScript; it's a standard according to which JavaScript is implemented by specific browsers and various services such as Node.

Soon after JavaScript was created, Netscape went to the ECMA International standards organization to request creation of a generalized, agreed-upon international standard for JavaScript that would be implemented by all browsers. It was hoped this would facilitate the work of web developers as, at the time, Netscape and Microsoft were implemented different and often incompatible standards for the browser-based scripting languages. In the end, Microsoft was very slow to accept international standards, but over the years all major vendors have come to accept this is the standard.

After the first ES standard in 1997, ES2 and 3 came out in 1998 and 1999, but after that, it was 10 years until a new standard came out, ES5. ES4 had been abandoned because people couldn't agree. ES5 really standardized and updated the language in 2009. Then it was another 6 years before a new standard, ES6, came out in 2015. Browser vendors were slow to update their products to reflect this new standard, but over the years it did get implemented. Even today, us old-schoolers think of ES6 as a bit new-fangled, and it's taken a lot of us quite some time to get used to it.

Following the launch of ES6 in 2015, the standards committee has met in some form every year, and we've been getting small little incremental changes. This year ES12 came out, but at this stage we don't call them by their names any more, we refer instead to the year of implementation. Thus, the nullish coalescing operator came out with ECMAScript 2020 (last year). The purpose of this lesson is to explore some of the changes that took place with ES6 in 2015 and some of the syntactical changes and options that have been available since then.

## let and const

One of the biggest changes was the introduction of let and const. Over the years, let and const have slowly overcome resistance and are now more common than the simple use of var. In this course we still introduce var first as it has a huge existing code base and is simpler to learn with when you don't need to worry about the difference between two kinds of variable declaration.

The essence of the distinction is, use *let* for variables that are expected to change in value, use *const* for variables that are expected not to change in value. Together, these two replace the space occupied exclusively by *var*.

There are some differences between let and var that are worth exploring.

First of all, var is globally scoped even when declared within a code block, that is, within curly braces. We can see this in an abstract way as follows:

```
{
    var name = 'javier';
}

console.log(name);
```
Contrast this with let, which is locally scoped (accessible only within the code block or curly braces). The following yields an uncaught reference error:

```
{
    let lastName = 'ruedas';
}

console.log(lastName);
```

This is significant, for example, when declaring a variable within a loop, which will be globally scoped if declared with var:

```
while (true){
    var name = 'javier';
    break;
}

console.log(name);
```
But locally scoped when declared with let. The following, interestingly, generates an empty string:
```
while (true){
    let name = 'javier';
    break;
}

console.log(name);
```
As does the following:
```
if (true) {let name = 'javier';}
console.log(name);
```
This generates 'jojo', as the block-scoped let declaration does not have any effect on the identically-named variable in the global scope:
```
let name = 'jojo';
if (true) {let name = 'javier';}
console.log(name);
```
In contrast, the following generates 'javier', as the variable declaration within the block overrides the one outside the block:
```
var name = 'jojo';
if (true) {var name = 'javier';}
console.log(name);
```
You can see that let would be useful because you often want to have variables inside loops or decisions that are identical to variables outside, without overriding the global scope. So, for this reason it will be useful to use let from now on, especially within decisions and loops, in order to avoid namespace conflict with the global scope. This allows you to use semantically appropriate variable names without having to go through the naming gymnastics like name, theName, the-name and so forth as we used to so often.

A function is a slightly different beast:

```
function scopeTester(){
    firstName = 'javier';
    var anotherName = 'patrick';
    let brothersName = 'luis';
    console.log('scopeTester ran');
}
scopeTester();

console.log(firstName);
// console.log(anotherName);
console.log(brothersName);
```
Notice how even when running a function, *both* var *and* let result in uncaught reference errors when attempting to access variables declared within the function from outside of it. The only way to accomplish this is to omit the variable keyword altogether, which strictly speaking is more a bug than a feature. But it has long been recognized that omitting the variable declaration keyword when assigning a variable within a function will result in a globally scoped variable assignment. So beware of that. (it can't happen if you "use strict").

JavaScript has really seen an industry-wide acceptance of let and const and a big shift away from using var. I couldn't get used to it for a long time and I still am not convinced it was necessary, but the argument was that it makes for clearer code and secures constants from accidental variation. After a while it does get habitual, just use let instead of var, except use const when you are certain something is not going to change, or when it shouldn't change.

## Template Literals

One of the most convenient new syntactical features that was introduced in ES6 is template literals, which make it a bit easier to concatenate. I personally am very used to the concatenation operator, but you have to admit it sometimes gets tricky to combine quotes and plus signs in exactly the correct order. Template literals solve that problem.

Note that while these are often called template strings, their correct technical term is template literals.

```
let name = 'Javier';
let job = 'programmer';
let place = 'Texas';

console.log(`${name} is a ${job} in ${place}`);
```

## Object Destructuring

ES6 introduced new ways to derive variables from objects. Now instead of taking an object apart one property at a time, we can do it all at once. So we used to have to do

```
const car = {
    make: "Toyota",
    model: "Tacoma",
    year: 2019,
    mileage: 12657
}

let make = car.make;
let model = car.model;

console.log(make);
console.log(model);
```
This can get a bit laborious for large objects. Now we have a shorthand: 
```
const {make, model, year, mileage} = car;
console.log(make);
console.log(model);
console.log(year);
console.log(mileage);
```

It's worth noting that just because I declare an object as a constant doesn't mean I can't update its property values:

```
console.log(car.model);
car.model = "Tundra";
console.log(car.model);
```

That's because an object variable doesn't contain an object, it contains a reference to an object. The object is elsewhere. So all this constant means is that this object reference can only refer to this object. I can never create another object and assign it to the variable car:

```
car = {};

Uncaught TypeError: invalid assignment to const 'car'
```

## Arrow functions

Probably the biggest adjustment for old-schoolers like me has been the introduction of a new syntax for functions. These are called arrow functions now. They look like this:

```
const add = (num1, num2) => num1 + num2;

console.log(add(5,6));
```

A few things to notice. Number 1, we cannot do function declarations with arrow syntax. We can only do function expressions. So if you recall, there are two ways to declare functions in JavaScript:

```
function add(num1, num2){ return num1 + num2; }
var add = function(num1, num2) { return num1 + num2; }
```

The difference is the first type, the function declaration, is hoisted, meaning to say, the interpreter reads it on a first pass through the code, so no matter where you declare a function in your code, it always works. In contrast, a function expression is only read in the flow of the rest of the code. Where you write a function expression matters, it will only be accessible to code that is written after ("below") it. 

All arrow functions are either function expressions or fully anonymous functions. It is most often used for totally anonymous functions as a sort of shorthand.

Another place you will never use it is inside an object, as a method. This is a bad idea because it doesn't have a *this* binding. 

So let's break down the change:

Old: 
```
var add = function(num1, num2) { return num1 + num2; }
```
New: 
```
const add = (num1, num2) => num1 + num2;
```

You leave out the function keyword, and you leave out the return keyword. You just put the parameters within the parentheses, then an arrow (equals plus greater than sign), and then the return.

A few particularities.
If there is only one parameter, you do not need the parentheses.

```
const addTen = number => number + 10;
console.log(addTen(10));
```

If you have no parameters, you just need empty parens to start with.

```
const helloWorld = ()=>"Hello World";
console.log(helloWorld());
```

You can put in default parameters in arrow syntax. You can also do that now in traditionally defined functions, though only since ES2015. Default parameters were introduced for all JS functions at that time.

```
const addSomething = (augend, addend = 25) => augend + addend;
console.log(addSomething(25));
```

An interesting thing is you can destructure objects within the parameters. Here is an arrow function that includes object destructuring and template literals.

```
const outputCar = ({make, model, year, mileage} = car)=>(console.log(`${year} ${make} ${model} with ${mileage} miles`));
outputCar();
```

## The for of loop

For ... of loops were also introduced in ES2015. They allow you to iterate over certain data types that are defined as iterable objects, which include for our purposes strings and arrays, including the particular kind of array called nodeList, which is returned from methods like getElementsByTagName. Interestingly, regular objects are not defined as iterable and so cannot be accessed with a for...of loop.

Basically it works like this:
Iterate over an array:
```
const instructors = ["Javier", "Justin", "Jay", "David"];
for (const name of instructors) {
    console.log(name + " teaches at Codeup!");
}
```
Iterate over a string:
```
for (const letter of 'Codeup'){
    console.log(letter);
    let p= document.createElement("p");
    document.getElementsByTagName("body")[0].append(letter, p);
}
```
Modify a string using unicode numbers:
```
for (const letter of 'Codeup'){
    let charCode = letter.charCodeAt(0);
    charCode++;
    console.log(String.fromCharCode(charCode));
}
```
Simple alphabetic shift cipher:
```
let newString = '';
for (const letter of 'Codeup'){
    let charCode = letter.charCodeAt(0);
    charCode++;
    newString += String.fromCharCode(charCode);
}
console.log(newString);
```

There is another loop in JavaScript called a for...in loop and it's worth noting the differences between these. 
For...in: loop over the enumerable properties of an object.
For...of: loop over the values of an iterable object.

The difference is immediately evident in an array. When you loop over an array with a for...in you get the indexes. 

```
for (const index in instructors) {
    console.log(index);
}
```
To get the values at those indices, you have to use array bracket notation:
```
for (const index in instructors) {
    console.log(`${index}:${instructors[index]}`);
}
```

This is more typically used for objects, which for...of loops can't iterate over at all but for...in loops can:

```
const instructors = {Justin: "Draco", Javier: "Draco", Jay: "Neptune", David: "Neptune"};
for (const prop in instructors) {
    console.log(`${prop} teaches in ${instructors[prop]}`);
}
```



