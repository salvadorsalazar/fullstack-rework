var num = 2;
while (num < 77777) {
    console.log(num);
    num *= 2;
}
//
var num = 1;
while (num < 50000) {
    num *= 2;
    console.log(num);
}

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var conesBeingBought = Math.floor(Math.random() * 5) + 1;
    if (conesBeingBought > allCones){
        console.log("Cannot sell you " + conesBeingBought + " I only have " + allCones);
    } else {
        allCones = allCones - conesBeingBought;
        console.log(conesBeingBought + " cones sold ..." + allCones + " cones left");
    }
} while (allCones > 0);
console.log("Yay! I sold them all!");
