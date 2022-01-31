// var pizza = 4;
// while(pizza>0){
//     console.log("There are " + " pizza slices");
//     pizza = pizza -1;
//     console.log('now theres ' + pizza + " slices left");
// }
// console.log('is it already all eaten?:')

// var counter = 0
// while (counter < 10){
//     console.log(counter);
//     counter++;
// }

// var counter = 100
// while (counter >= 0){
//     console.log(counter);
//     counter--;
// }
//

// var counter = 1;
// var number = 5;
// while (counter <=5){
//     number = number *2;
//     console.log(number);
//     counter++;
// }


// var number = 5;
// while (number < 200){
//     number *=2;
//     console.log(number);
//
// }



// var total =0;
// var priceOfItem;
//var priceOfItem=parseFloat(prompt('enter the price of item?'));
// alert('price of item is :$ ' + priceOfItem);
// var total = total + priceOfItem;
// alert('your total cost for item/items is : $' + total)//totalCost = priceOfItem

//=======================================================================
//accumalotr variabnle
//var total =0;
//var priceOfItem;
//sentine value :stop
// while(true){
//     userInput = prompt('Enter price of item :' + '\n' + 'Enter stop to end');
//     //sentine value :stop
//     if(userInput == 'stop' || userInput ==='') {
//             alert("Your total coast is now $ " + total);
//             break;
//         }else{
//             priceOfItem = parseFloat(userInput);
//             total = total + parseFloat(priceOfItem);
//             alert("your total coast is now $" + total.toFixed(2))
//             }
//         }

//============================================================================


/*
        //lets get a random mumber
var number= Math.ceil(Math.random()*6);
var guess;
do{
    guess = parseInt(prompt('enter a numbe rbetween 1 and 6'));
}while( guess !== number);
alert('your guess of ' + guess + 'matches the number ' + number);


//pseudoe
//ask user for input -- store user input in a variable
//declare variable to hold rinning total
//add user input priceof item to a running total variable
//loop back and ask user for price of next item
//need som eway for user to break out of loop--
//?? stop or end or some other way for them to end the program
//tell user how to end the program
//?? wrn use when they reach the limit

*/



//==================
//loops excerises #2
//==================

var count = 100;
while(count >=0){
    console.log(count);
    count = count -1;
}
//"count" is the loop control variable(lcv)
//the lcv get initialized ( var count =100;)
// the calue of the lcv is checked in the conditional tewst
//the lcv is output
//the value of the lcv is modified inside the loop (count = count -1;) -- otherwise it is an infintie loop

//this is a for loop , rewritten same as above
for(count =0;count>+0;count = count -1){
    console.log(count);
}
//even this is too long for prgorammers
//i is the iterator --standar name for the looop control variable
 for(i =100;i>=0;i--){
     console.log(i)
 }

 // here the lcv is incremented after the output
 var i =0;
 while(i<=100){
     console.log(i);
     i = i + 1;
 }
//here the lcv is incremeneted before the output
var i =0;
while(i<=100){
       i = i + 1;
    console.log(i);
}
//in a for loop, the lcv is modified las. always last.
//we see 99 , then its increments. we never see 100.
 for( i =0;i<100;i++){
     console.log(i);
 }












