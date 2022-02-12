## JavaScript conditionals

Set up conditionals-lecture.html

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf8">
	<title>Conditionals Lecture</title>
</head>
<body>
	<script src="conditionals-lecture.js"></script>
</body>
</html>
```

In conditionals-lecture.js, we can go ahead and ```"use strict"```.

Now let's check the connection to the script page

```
alert("hello world");
```

Now let's get some input from the user. Then let's check the input, determine if a condition is true, and depending on that evaluation, take an action or not take it.
```
var flavor = prompt("Welcome to Codeup Ice Cream. What flavor do you want?");


if (flavor === "chocolate") {
	alert("One chocolate coming right up!");
} 
```

But our script will only do something if the user enters chocolate. Let's create a default option.

```
if (flavor === "chocolate") {
	alert("One chocolate coming right up!");
} else {
	alert("We do not have that flavor. Sorry! :(");
}
```

We can add else if clauses to expand our range of choices

```
if (flavor === "chocolate") {
	alert("One chocolate coming right up!");
} else if (flavor === "vanilla") {
	alert("One vanilla coming right up!");
} else {
	alert("We do not have that flavor. Sorry! :(")
} 
```

If we have a lot of choices, we can use a switch statement

```
switch(flavor) {
	case("chocolate"):
		alert("One chocolate coming right up!");
		break;
	case("vanilla"):
		alert("One vanilla coming right up!");
		break;
	case("strawberry"):
		alert("One strawberry coming right up!");
		break;
	default:
		alert("We do not have that flavor. Sorry! :(");
		break;
}
```

We can start to improve our usability by testing on a variant of the user input rather than on the input itself

```
switch(flavor.toLowerCase()) {
	case("chocolate"):
		alert("One chocolate coming right up!");
		break;
	case("vanilla"):
		alert("One vanilla coming right up!");
		break;
	case("strawberry"):
		alert("One strawberry coming right up!");
		break;
	default:
		alert("We do not have that flavor. Sorry! :(");
	
```

We can refactor this script and turn it into a function

```
var apology = "We do not have that flavor. Sorry! :(";

function serveIceCream(flavor) {
	if (flavor === "chocolate" || flavor === "strawberry" || flavor === "vanilla"){
		alert("One " + flavor + " coming right up!");
	} else {
		alert(apology);
	}
}

serveIceCream(flavor);
```

We might even refactor this so that our function doesn't require a variable in global scope. This makes our function more portable and less error-prone.

```
var message = "We do not have that flavor. Sorry! :(";

function serveIceCream(flavor, apology) {
	if (flavor === "chocolate" || flavor === "strawberry" || flavor === "vanilla"){
		alert("One " + flavor + " coming right up!");
	} else {
		alert(apology);
	}
}

serveIceCream(flavor, message);
```

We could take this one step further and refactor the prompt. Then we could have

```
function getIceCreamOrder(){
    return prompt("What flavor would you like?");
}

serveIceCream(getIceCreamOrder(), message);
```

Now let's look at the ternary operator. Let's do a confirm dialog. Remember, the confirm dialog returns true or false depending on the user's choice.

```
var decision = confirm("Are you sure you want to close this page?");
alert(decision);
```

Thus, since a conditional clause is executed if the conditional test evaluates to true. The conditional test can be an expression, but it can also be a value -- a value that is or can be evaluated to true or false. In this case, since the decision variable contains a boolean, it alone is sufficient as a condition, without any comparison or logical operator

```
	if (decision){
		alert("OK, closing the page.");
	} else {
		alert("OK, keeping page open.");
	}
```

Now, we can refactor this to use a ternary operator

I could do it like this

```
(decision)?alert("OK, closing the page"):alert("OK, keeping the page open.");
```

But an even more efficient way of doing it is like this -- inside the alert function. Using the ternary operator, we can make a decision inside the alert function's parameter itself.

```
//alert((decision) ? "OK, closing" : "Keeping it open!");
```

Let's look at another example. Let's see if something is divisible by five.

```
var number = prompt("Enter a number");

alert(number);

if(number%5 === 0){
	alert("That number is divisible by 5");
} else {
	alert("That number is not divisible by 5");
}
```

Now let's look at a few different ways we could refactor this. The simplest way is to create a function that takes a number parameter, and really just drop the conditional code inside it. We then run the function (or call it, or invoke it).

```
function divisibleByFive(number) {
	if(number%5 === 0){
		alert("That number is divisible by 5");
		} else {
		alert("That number is not divisible by 5");
		}
}

divisibleByFive(number);
```

We could also combine the prompt with the function call.

```
divisibleByFive(prompt("Enter a number"));
```

We can refactor the function to use a ternary operator

```
function divisibleByFive(number) {
	alert( (number % 5 === 0) ? "That number is divisible by 5" : "That number is not divisible by 5");
}

divisibleByFive(prompt("Enter a number"));
```

We can also refactor to return a boolean. This is a common use scenario.

We could do it like this, for a verbose and explicit code:

```
function divisibleByFive(number) {
    return number % 5 === 0 ? true : false;
}
```
But the way it's more commonly done is:
```
function divisibleByFive(number) {
    return number % 5 === 0;
}
```

And now we can use a ternary operator for the output:

```
alert(divisibleByFive(prompt("Enter a number:")) ? "Divisible by 5": "Not divisible by 5");
```

Let's try a few more functions that start out with if-then bodies but evolve to boolean returns. Let's try one that does something practical: detect undefined.

Let's start with an unset variable, pretend that it's a user input. Say, a form item that never got submitted.

```
var email;
```

Now I could simply do this

```
if (email === undefined){
    alert("That's undefined");
} else {
    alert("That's defined");
```

We can also detect the type, remembering that undefined is a type, and that the typeof operator returns a string.

```
var email;

if (typeof email === "undefined"){
    alert("That's undefined");
} else {
    alert("That's defined");
}
```

To prove that this is more versatile, comment out var email.

Let's refactor it.

```
function isUndefined(input) {
    if (typeof input === "undefined"){
        return true;
    } else {
        return false;
    }
}

console.log(isUndefined(email));
```
```
function isUndefined(input) {
    return typeof input === "undefined";
}
console.log(isUndefined(email));
```

Now let's try this on a prompt. A prompt actually returns not undefined, but null and empty string if no input is given.

```
var email = prompt("Enter your email:");

alert(email);
```

So we just expand the range of our function. We can do

```
var email = prompt("Enter your email:");

function isUndefined(input) {
    return typeof input === "undefined" || input === null || input === "";
}
console.log(isUndefined(email));
```

One more similar example. An over 1000 function

``` 
function alertMVP(purchaseTotal){
    if (purchaseTotal > 1000){
        alert("This is an MVP! They've bought " + purchaseTotal);
    }
}

alertMVP(900);
alertMVP(1000);
alertMVP(1001);
```

If we refactor alertMVP to return a boolean, we can use it like this:

```
function isMVP(purchaseTotal){
    return purchaseTotal > 1000;
}

var purchaseTotal = 1001;

if (isMVP(purchaseTotal)){
    alert("We have an MVP!");
}
```