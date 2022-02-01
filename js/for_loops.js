//"use strict";


//==================
// function showMultiplicationTable(input){
//     var i = 1;
//         while(i <= 10){
//             console.log(input + ' x ' + i +" = " + (input*i));
//             i++;
//            i *= 2;
//         }
// }
// showMultiplicationTable();

//====================================

/*
function showMultiplicationTable(x) {

    for (i = 1; i <= 10; i++)
    {
        console.log(x + ' x ' + i + " = " + (x * i));
    }
}
*/

// //==================

/*
function OddOrEven(x){

    for(i=1;i<=10;i++){
        var randomNumber = Math.floor(Math.random() * 180)+20;
        if (randomNumber %2 ===0){
            console.log('number :' + randomNumber + " is Even")

        }
        if(randomNumber %2 !== 0){
            console.log("number : " + randomNumber + " is Odd")


        }
    }
   // console.log(i)
}

OddOrEven();

*/


//=============================

// Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
//======================================
//chrisinassoultion
//=====================
/*
function numPayramid(x){

    for( count = 1;count <= x ;count++){
        var stringOutput = "";
        for(duration = 0;duration < count;duration++){
            stringOutput = stringOutput + count.toString();
                    }
        console.log(stringOutput);
    }
}
numPayramid(9)

//=========================================
 */


var crazyOne = 1;
for (i = 1; i < 10; i++) {
    console.log(i * crazyOne);
    crazyOne  = crazyOne.toString() + 1;
}

/*
function decreaseNumbers(x){


    for (i = 100; i >=0; i--){
      // i = i -5;
        console.log(i);
        i = i -5;

    }
    // for (i = 100; i >=0; i--){
    //     console.log(i);
    // }

}
decreaseNumbers();

*/