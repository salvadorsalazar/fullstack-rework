// Test the connection between the html page and the JavaScript

// alert("hello world!");

/*var flavor = prompt("Welcome to Codeup Ice Cream! What flavor do you want?");*/

// Basic conditionals syntax
// if-else
// if - else if - else

// if (flavor === "chocolate") {
//     alert("One chocolate coming right up!");
// } else if (flavor === "vanilla"){
//     alert("One vanilla coming right up!");
// } else if (flavor === "strawberry"){
//     alert("One strawberry coming right up!");
// } else {
//     alert("We do not have that flavor. Sorry! :(");
// }

// switch conditional syntax
// hey browser, look at the value of the flavor variable
// and switch your response depending on the value

// switch(flavor) {
//     case("chocolate"):
//         alert("One chocolate coming right up!");
//         break;
//     case("vanilla"):
//         alert("One vanilla coming right up!");
//         break;
//     case("strawberry"):
//         alert("One strawberry coming right up!");
//         break;
//     default:
//         alert("We do not have that flavor. Sorry! :(");
// }


// refactor the conditional to use a function

// function getIceCreamOrder(flavor) {
//     if (flavor === "chocolate") {
//         alert("One chocolate coming right up!");
//     } else if (flavor === "vanilla"){
//         alert("One vanilla coming right up!");
//     } else if (flavor === "strawberry"){
//         alert("One strawberry coming right up!");
//     } else {
//         alert("We do not have that flavor. Sorry! :(");
//     }
// }

// refactor our function to not repeat code

// function getIceCreamOrder(flavor){
//     if (flavor === "chocolate" || flavor === "vanilla" || flavor === "strawberry"){
//         alert("One " + flavor + " coming right up!");
//     } else {
//         alert("We do not have that flavor. sorry! :(");
//     }
// }


// separate out checking if the flavor is available into a separate function
// This function just checks if the flavor exists and returns a boolean
// A function should do one thing well, so it makes sense to refactor complex
// functions into multiple functions

// function checkIfWeHaveTheFlavor(flavor){
//     var weHaveThat = false;
//     if (flavor === "chocolate") {
//        weHaveThat = true;
//     } else if (flavor === "vanilla"){
//        weHaveThat = true;
//     } else if (flavor === "strawberry"){
//         weHaveThat = true;
//     }
//     return weHaveThat;
// }

// continuing the refactor --
// get the ice cream order from the user in a function separate from checking the
// flavor availability and the repy to customer

// function getIceCreamOrder() {
//     return prompt("Welcome to Codeup Ice Cream! What flavor do you want?");
// }

// Now create a reply-to-customer function
// It uses the check-if-the-flavor-is-available function to generate a boolean value
// which controls the conditional, which controls the reply


// function replyToCustomer(flavor){
//     if (checkIfWeHaveTheFlavor(flavor)){
//         alert("One " + flavor + " coming right up!");
//     } else {
//         alert("We do not have that flavor. sorry! :(");
//     }
// }
//

// Now we trigger the whole thing into action by calling the
// reply-to-customer function. It needs to know the customer order.
// So we give it the getIceCream order function as a parameter. It evaluates this, and passes
// it into the reply-to-customer function
// the reply-to-customer function calls the check-if-we-have-the-flavor function
// and offers the correct reply

// replyToCustomer(getIceCreamOrder());

// Ternary operators

// Use a conditional to do different things based on a user decision in a confirm dialog

// var decision = confirm("Are you sure you want to close this page!");
// alert(decision);

// if (decision){
//     alert("OK, closing the page ... ๏̯͡๏");
// } else {
//     alert("Yay! Keeping page open ... (̶◉͛‿◉̶)");
// }
//

// Refactor to use a ternary operator

//alert((decision === true))? "OK, closing the page ..." : "Yay! Keeping the page open");

// check if a number is divisible by 5, using a conditional

// var num = 10;

// if(num % 5 === 0) {
//     alert("That number is divisible by 5!");
// } else {
//     alert("That number is not divisible by 5!");
// }

// refactor to use a conditional inside a function

// function divisibleByFive(num){
//     if(num % 5 === 0) {
//         alert("That number is divisible by 5!");
//     } else {
//         alert("That number is not divisible by 5!");
//     }
// }

// refactor to use a ternary operator

// function divisibleByFive(num){
//     alert ( (num % 5 === 0)? "That number is divisible by 5" : "That number is not divisible by 5");
// }

// refactor to return a boolean

// function isDivisibleByFive(num){
//     if (num % 5 === 0) {
//        return true;
//     } else {
//         return false;
//     }
// }

// simplify. the boolean expression with the comparison operator evaluates to true or false
// therefore, this function returns a boolean

// function isDivisibleByFive(num){
//     return num % 5 === 0;
// }

// have fun, play with the variables, try different things

// function isDivisibleByTen(num){
//     return num % 10 === 0;
// }

// write a function that checks if something is of undefined type
// start by writing the conditional logic

// var email;

// if (typeof email === "undefined") {
//     alert("That's undefined!");
// } else {
//     alert("That's not undefined. :)");
// }

// now turn it into a function that takes an input and returns a boolean (true or false)
// returns true if the input is of undefined type, or false if not

// function isUndefined(input) {
//     if (typeof input === "undefined") {
//         return true;
//     } else {
//         return false;
//     }
// }

// simplify the function

// function isUndefined(input) {
//     return typeof input === "undefined";
// }

// write a function that alerts us to high-spending customers

// function alertMVPCustomer(totalPurchase){
//     if (totalPurchase > 1000){
//         alert("We have an MVP customer!");
//     }
// }

// refactor the function to check if it is true or false that a customer is high-spending
// and tell us if it is true or false (return true or false ... return a boolean)

// function alertMVPCustomer(totalPurchase){
//     if (totalPurchase > 1000){
//        return true;
//     } else {
//         return false;
//     }
// }

// simplify the function

// function alertMVPCustomer(totalPurchase){
//     return totalPurchase > 1000;
// }

// it's not an alert function any more, so rename it

// var isMVPCustomer = function(totalPurchase){
//     return totalPurchase > 1000;
// }

// do or do not?

var whatTheCustomerSpent = 1001;

//Don't do this:
// Don't call a global variable from inside a function
// var isMVPCustomer = function(){
//     return whatTheCustomerSpent > 1000;
// }

// Do this:
// define a parameter, pass a value into a function
// Through the parameter, and use that
function isMVPCustomer(totalPurchase){
    return totalPurchase > 1000;
}

if (isMVPCustomer(whatTheCustomerSpent)){
    alert("We have an MVP customer!");
}












