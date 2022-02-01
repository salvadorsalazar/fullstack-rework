/*
console.log("Hello from external JavaScript");
alert("Welcome to my Website!");

var userInput = prompt('what is your favorite color?');
alert('Great ' + userInput + ' is my favorite color too!');



var rentalPerDayDollars;
var littleMermaidDays;
var brotherBearDays;
var herculesDays;
var totalRentalCost;

totalRentalCost =
    (parseInt(littleMermaidDays)
        + parseInt(brotherBearDays)
        + parseInt(herculesDays))
    * parseInt(rentalPerDayDollars);

alert(totalRentalCost);
*/


//var movieName = prompt( 'what is the name of movie');
//var movieDays = prompt( 'How many days did you have movie?');
//var moviePrice = 3;//prompt( 'How Much does the ' + movieName +' cost a day?');
//var totalPrice = movieDays*moviePrice;
//alert("you owe $"+ totalPrice + " for " + movieName);

//


var googleHourlyRateDollars = prompt("what is google hourly pay?");
var amazonHourlyRateDollars =prompt("what is Amazon hourly pay?");
var facebookHourlyRateDollars= prompt("what is facebook hourly pay?");
var googleHours = prompt("what is google hours worked?");
var amazonHours= prompt("what is amazon hours worked?");
var facebookHours= prompt("what is facebook hours worked?");
var totalPayment= googleHours * googleHourlyRateDollars+ amazonHours
    * amazonHourlyRateDollars+ facebookHours * facebookHourlyRateDollars;
alert("total payments is $" + totalPayment.toFixed(2));