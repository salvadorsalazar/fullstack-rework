"use strict";


// var i = 2;
// while(i <= 65536){
//     console.log(i);
//     i = i*2;
// }


==============================================
var allCones = Math.floor(Math.random() * 50)+50;

do {
    var conesBought = Math.floor(Math.random() * 5) + 1;
    if (conesBought > allCones) {
        console.log('cant sell you any cones , no more left.');
    } else {
        allCones = allCones - conesBought;
        console.log('cones bought : ' + conesBought);
        console.log('cones left : ' + allCones);
    }
} while (allCones > 0) ;



// // This is how you get a random number between 50 and 100
 var allCones = Math.floor(Math.random() * 50)+50;
//
// //var allCones = Math.floor(Math.random() * 50) + 50;
// //console.log('you have ' + allCones + ' to start with ');
// alert('you have ' + allCones + ' to start with ');
 var totalConesLeft =0;
//
 do{
      var conesPurchased = Math.floor(Math.random() * 5) + 1;
     if(totalConesLeft + conesPurchased > allCones){
     continue;
     }
     totalConesLeft =  totalConesLeft=conesPurchased;
     console.log('customer bought ' + conesPurchased);
     console.log('total sold ' + totalConesLeft);
 }while(totalConesLeft < allCones);




 //==================================================================

      // totalConesLeft =allCones - conesPurchased;
//
//     // var conesPurchased = Math.floor(Math.random() * 5) + 1;
//      totalConesLeft=allCones - conesPurchased;
//     alert('there are ' + allCones + ' left')
// alert('your purchased' + conesPurchased + ' cones');
//     //    console.log( conesPurchased + ' cones purchased ');
// alert('we have ' + totalConesLeft + ' left');
//
// }while(totalConesLeft > allCones);
// alert('there are ' + totalConesLeft + ' left , we are out of cones')
// //console.log('we are out of cones')
//
// //alert( conesPurchased + ' cones purchased ');
// //conesPurchased = conesPurchased - allCones;
// //allCones= allCones - conesPurchased;
//







//     guess = parseInt(prompt('enter a numbe rbetween 1 and 6'));
// }while( guess !== number);
// alert('your guess of ' + guess + 'matches the number ' + number);
//
//


