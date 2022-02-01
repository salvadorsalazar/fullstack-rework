//var flavor = prompt("Welcome to codeup! What flavor do you want");


//
// if(flavor === "chocalate"){
//     alert("One chocalate coming right up");
// }else if (flavor === "vanilla"){
//     alert("one vanilla coming right up");
// }else if (flavor === "strawberry"){
//     alert("one strawberry coming right up");
// }
// else{
//     alert("Wed do not have that flavor,sorry.");
// }


//switch
//browser look at the value of the flavor variable
//and switfh your response depending on value
//
// switch(flavor){
//     case("chocalate"):
//         alert("one chocalte coming right up");
//         break;
//     case("vanilla"):
//         alert("one vanilla coming right jp");
//         break;
//     case("strawberry"):
//         alert("one strawberry coming uo");
//     default:
//         alert("we do not have that flavor");
//
//
// }

//refactor to be a function
// function getIceCreamOrder(flavor) {
//
//     if (flavor === "chocalate") {
//         alert("One chocalate coming right up");
//     } else if (flavor === "vanilla") {
//         alert("one vanilla coming right up");
//     } else if (flavor === "strawberry") {
//         alert("one strawberry coming right up");
//     } else {
//         alert("Wed do not have that flavor,sorry.");
//     }
// }
//     getIceCreamOrder("chocalate");
//
// function getIceCreamOrder(flavor) {
//     if(flavor ==="chocalate" || flavor ==="vanilla"|| flavor =="strawberry"){
//         alert("One " + flavor +" coming right up");
//     }else{
//         alert("we do not have that flavor");
//     }
//
// }
// getIceCreamOrder("chocalate");
//
//
// function checkIfWeHaveThatFlavor(flavor){
//     var wehavethat=false;
//     if(flavor ==="chocalate"){
//         wehavethat=true;
//     }else if flavor ==="vanilla"){
//         wehavethat=true;
//     }else if(flavor =="strawberry") {
//         wehavethat = true;
// }
//      return checkIfWeHaveThatFlavor(flavor);
//
//
// function getIceCreamOrder(flavor){
// return prompt("welcome ehat flavor do you want");
//
// }
// function replyToCustomer(flavor){
//     if (checkIfWeHaveThatFlavor(flavor)){
//         alert("one " + flavor + " coming right up ");
//         }else {
//         alert("we do not have that flavor");
//     }
// }
// replyToCustomer(getIceCreamOrder());

// var decision = confirm("Are you sure you want to close this page !");
// //alert(decision);
// //
// // if (decision /* === true */){
// //     alert("oK, closing the page ... ");
// // } else{
// //     alert("yay ! keeping page open ....");
// // }
//
// alert((decision===true)? "Ok,closing the page" : "yay! keeping the page open"  );









// var num = 10;
//
// if(num % 5 === 0){
//     alert("that number is divisible by 5!");
// }else{
//     alert("that number is NOT divisible by 5 !")
// }
//
// function divisibleByFive(num){
//     if(num % 5 === 0){
//         alert("that number is divisible by 5!");
//     }else{
//         alert("that number is NOT divisible by 5 !")
//     }
// }
//
// function divisibleByFive(num){
//     alert((num %5===0)?"that number is divisible by 5":"that number is NOT divisible by 5");
// }
// function isDivisiblebyFive(num){
//     if (num %5 ===0){
//         return true;
//     }else{
//         return false;
//     }
// }
//
//
// function isDivisiblebyFive(num){
//     return num % 5 === 0;
// }
//
//
// function isDivisibleByTen(num){
//     return num % 10 === 0 ;
// }
//
//


//
// var email;
// if (email === undefined ) {
//     alert('thats undefined');
// }else{
//         alert ('thats not defined');
//     }

//
// function alertMVPCustomer(totalPurchase){
//     if (totalPurchase > 1000){
//   return true;
//     }else{
//         return false;
//     }
// }
//
//
// function alertMVPCustomer(totalPurchase){
//     return ttotalPurchase > 1000;
//
// }

function isMVPCustomer(totalPurchase){
    return totalPurchase > 1000;
}

var totalPurchase = 1200;
if (isMVPCustomer(totalPurchase)){
    alert("we have an mvp customer");
}else{
   alert("NOT an mvp customer");
}