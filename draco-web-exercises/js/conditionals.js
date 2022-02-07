"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color){
    if (color === 'red'){
        return "Roses are red";
    } else if (color === 'orange') {
        return "Orange is pumpkins and prison clothes";
    } else if (color === 'yellow') {
        return "Our sun is a yellow star";
    } else if (color === 'green') {
        return "Plant life is green";
    } else if (color === 'blue') {
        return "The sky is blue";
    } else if (color === 'indigo') {
        return "Is indigo even a real rainbow color?";
    } else if (color === 'violet') {
        return "Who ever said violets are blue?";
    } else {
        return "I don't even know that color";
    }
}



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */



/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

//============================== First step =========================

// Let's do this one step at a time. First let's write the basic code.
    // Step one: ask the user if they want to enter a number
    /*
var wantToEnterNumber = confirm("Do you want to enter a number?");
// Step two: if they do want to enter a number, get that number
if (wantToEnterNumber){
  var userNumber = prompt("Enter a number");
}
// Step three: check if the number is odd or even, and tell the user
var oddOrEven;
if (userNumber%2===0){
   oddOrEven = userNumber + " is even.";
} else {
   oddOrEven = userNumber + " is odd";
}

alert(oddOrEven);

// Step four: add 100 to the number, and tell the user
var numberPlus100 = userNumber + " plus 100 equals " + (Number(userNumber) + 100) + ".";

alert(numberPlus100);

// Step five: check if the number is positive or negative
var negativeOrPositive;
if (userNumber < 0) {
   negativeOrPositive = "That is a negative number.";
} else {
   negativeOrPositive = "That is a positive number.";
}
alert(negativeOrPositive);
*/

//============================== Next step ========================

// Now that we have written the basic code, we move to the next step:
// Refactor so if what the user enters is not a number, there's an alert
// Basically this is the same code, except everything that happens after
// getting the number from the user is wrapped up in a conditional (if-else)
// such that if it isn't a number, you get an alert, and if it is a number,
// all that code that we already wrote runs
// The biggest difficulty here is making sure you put the curly braces
// are in the right place

// var wantToEnterNumber = confirm("Do you want to enter a number?");
// if (wantToEnterNumber){
//   var userNumber = prompt("Enter a number");
//   if (isNaN(userNumber)){
//    alert("That is not a number!");
//   } else {
//     var oddOrEven;
//     if (userNumber%2===0){
//        oddOrEven = userNumber + " is even.";
//     } else {
//        oddOrEven = userNumber + " is odd";
//     }

//     alert(oddOrEven);

//     var numberPlus100 = userNumber + " plus 100 equals " + (Number(userNumber) + 100) + ".";

//     alert(numberPlus100);

//     var negativeOrPositive;
//     if (userNumber < 0) {
//        negativeOrPositive = "That is a negative number.";
//     } else {
//        negativeOrPositive = "That is a positive number.";
//     }
//     alert(negativeOrPositive);
//       }
//     }


//====================================== Step three =================================

// Refactor to use functions

// I create a function to get the number

// function getNumber() {
//    var wantToEnterNumber = confirm("Do you want to enter a number?");
//    if (wantToEnterNumber){
//        var userNumber = prompt("Enter a number!");
//        if (isNaN(userNumber)){
//            alert("That is not a number!");
//            return NaN;
//           } else {
//            userNumber = parseInt(userNumber);
//            return userNumber;
//           }
//    }
// }

// A function that determines odd or even

// function oddOrEven(number){
//    number = parseInt(number);
//    if (number%2==0){
//        return number + " is even.";
//    } else {
//        return number + " is odd."
//    }
// }

// A function that determines the number plus 100
// I have to parse number so it's not a string, and
// even then I have to wrap the addition in parentheses or it'll concatenate

// function numberPlus100(number){
//    number = parseInt(number);
//    return number + " plus 100 equals " + (number + 100) + ".";
// }

// A function that determines negative and positive

// function negativeOrPositive(number){
//    number = parseInt(number);
//    if (number < 0) {
//        return number + " is a negative number.";
//     } else {
//        return number + " is a positive number.";
//     }
// }

// Run it all like this:

// var theUsersNumber = getNumber();
// alert(oddOrEven(theUsersNumber));
// alert(numberPlus100(theUsersNumber));
// alert(negativeOrPositive(theUsersNumber));

//==================================== Make it better =============================

// This part is the same

// function getNumber() {
//     var wantToEnterNumber = confirm("Do you want to enter a number?");
//     if (wantToEnterNumber){
//         var userNumber = prompt("Enter a number!");
//         if (isNaN(userNumber)){
//             alert("That is not a number!");
//             return NaN;
//         } else {
//             userNumber = parseInt(userNumber);
//             return userNumber;
//         }
//     }
// }

// I refactor oddOrEven to use a ternary operator

// function oddOrEven(number){
//     return (number%2===0) ? number + " is even." : number + " is odd.";
//  }

// I refactor negativeOrPositive to use a ternary operator

 // function negativeOrPositive(number){
 //    return (number < 0) ? number + " is a negative number." : number + " is a positive number.";
 // }

// function numberPlus100(number){
//     number = parseInt(number);
//     return number + " plus 100 equals " + (number + 100) + ".";
// }

// I check to see if what I get is a number again, as I did at first
// I can't do if number === NaN
// it has to be !isNaN because NaN is never equal to NaN

// var maybeANumber = getNumber();
// if (!isNaN(maybeANumber)) {
//     alert(oddOrEven(maybeANumber));
//     alert(numberPlus100(maybeANumber));
//     alert(negativeOrPositive(maybeANumber));
// }

//================================= Final version ===============================

// Final step: everything is a function
// I start the ball rolling with analyzeNumber
// analyzeNumber calls getNumber
// getNumber runs the confirm dialog, and if the user wants,
// prompts the user and runs returnNaNOrANumber
// returnNanOrANumber returns either NaN, if the user did not enter a number,
// or a number if they did enter one
// since we pass getNumber to analyzeNumber, analyze number
// can check if the passed value isNaN. If it isn't, it runs
// the oddOrEven, numberPlus100, and negativeOrPositive functions
// and it alerts their outputs

function oddOrEven(number){
    return (number%2===0) ? number + " is even." : number + " is odd.";
}

function numberPlus100(number){
    var mySum = number + 100;
    return number + " plus 100 equals " + mySum + ".";
}

function negativeOrPositive(number){
    return (number < 0) ? number + " is a negative number." : number + " is a positive number.";
}

function getNumber() {
    if (confirm("Do you want to enter a number?")){
        return returnNaNOrNumber(prompt("Enter a number!"));
    }
}

function returnNaNOrNumber(input){
    if (isNaN(input)){
        alert("That is not a number!");
        return NaN;
    } else {
        return parseInt(input);
    }
}

function analyzeNumber(input){
    if (!isNaN(input)){
        alert(oddOrEven(input));
        alert(numberPlus100(input));
        alert(negativeOrPositive(input));
    }
}

analyzeNumber(getNumber());