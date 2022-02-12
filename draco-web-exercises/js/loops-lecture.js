
// var pizzaSlices = 4;
//
// while (pizzaSlices > 0){
//     console.log("Mmmmm.... Pizza ... There's " + pizzaSlices + " slices!");
//     console.log("I'll have one!");
//     pizzaSlices = pizzaSlices - 1;
//     console.log("Now there's " + pizzaSlices + " slices left!");
// }
//
// console.log("Is it already all eaten? :(");

// var counter = 0;
// while (counter <= 100){
//     console.log(counter);
//     counter++;
// }

// var counter = 1000;
// while (counter >= 0){
//     console.log(counter);
//     counter--;
// }

// var counter = 1;
// var number = 5;
// while (counter <= 100){
//     number = number * 2;
//     console.log(number);
//     counter++;
// }

// var number = 5;
// while (number < 200) {
//     number *= 2; // number = number * 2;
//     console.log(number);
// }
//
// var number = 5;
// while (number < 200) {
//     console.log(number);
//     number *= 2; // number = number * 2;
// }

// pseudocode
// Ask user for input -- store user input in a variable
// Declare variable to hold running total
// Add user input price of item to a running total
// Loop back and ask the user for price of next item
// I need some way for user to break out of loop --
// ?? stop or end or some other way for them to end the program
// Tell user how to end the program
//?? Feature: warn user when they reach the limit
//?? When do you get free shipping?

// // accumulator variable: var total
// var total = 0;
//
// var priceOfItem;
//
// while (true){
//     var userInput = prompt("Enter the price of your item: " + "\n " +
//         "Enter STOP to end program");
//     // sentinel value: STOP
//     if (userInput == "STOP"){
//         alert("OK. Your final total is " + total);
//         break;
//     } else {
//         priceOfItem = parseFloat(userInput);
//         total = total + priceOfItem;
//         alert("Your total cost is now " + total.toFixed(2));
//     }
// }

// accumulator variable: var total
// var total = 0;
//
// var priceOfItem;
//
// while (true){
//     var userInput = prompt("Enter the price of your item: " + "\n " +
//         "Enter STOP to end program");
//     // sentinel value: STOP
//     if (userInput == "STOP"){
//         alert("OK. Your final total is " + total);
//         break;
//     } else {
//         priceOfItem = parseFloat(userInput);
//         total = Decimal.add(total, priceOfItem);
//         alert("Your total cost is now " + total);
//     }
// }

// Let's get a number between 1 and 6

// var number = Math.ceil(Math.random() * 6);
// var guess;
// do {
//     guess = parseInt(prompt("Enter a number between 1 and 6: "));
// } while (guess !== number);
// alert("Your guess of " + guess + " matches the number " + number + "!");

// for loops

// var count = 100;
// while (count >=0){
//     console.log(count);
//     count = count -1;
// }

// "count" is the loop control variable (lcv)
// The lcv gets initialized (var count = 100;)
// The value of the lcv is checked in the conditional test
// The lcv is output (console.log(count);)
// The value of the lcv is modified inside the loop (count = count -1;) -- otherwise it is an infinite loop

//(lcv initialized ; conditional tested; lcv modified)
// for (count = 100; count >= 0; count = count -1){
//     console.log(count);
// }
// even this is too long for impatient programmers
// i is the iterator -- standard name for the loop control variable
// for (i = 100; i >=0; i--){
//     console.log(i);
// }

// Here the lcv is incremented after output
// I never see 99
// var i = 0;
// while (i<100){
//     console.log(i);
//     i = i + 1;
// }

// Here the lcv is incremented before output
// I see 100
// var i = 0;
// while (i<100){
//     i = i + 1;
//     console.log(i);
// }

// In a for loop, the lcv is modified last. Always last.
// We see 99, then it's incremented. We never see 100.
// for (i=0; i < 100; i++){
//     console.log(i);
// }

// You can change your starting point
// You can change your end point
// You can change by how much you step up or down
// you can have a loop within a loop
// you can have a conditional within a loop
// for (i=512; i >0; i -=24){
//     console.log(i);
//     for (inner = 0; inner < 9; inner++){
//         console.log(i + " plus " + inner + " equals " + (i + inner));
//     }
//     if (i < 50){
//         console.log(i + " is such a cute little number! <3");
//     }
//
// }

// var words = "";
// for (i = 0; i < 5; i++) {
//     var word = prompt("Let's make sentence! Enter a word!");
//     if(word === "curses"){
//         console.log("Ouch! This is a respectable program!");
//         break;
//     }
//     words = words + " " + word;
//     console.log("Your sentence is " + words);
// }

var words = "";
for (i = 0; i < 5; i++) {
    var word = prompt("Let's make sentence! Enter a word!");
    if(word === "curses"){
        console.log("Ouch! This is a respectable program!");
        continue;
    }
    words = words + " " + word;
    console.log("Your sentence is " + words);
}




