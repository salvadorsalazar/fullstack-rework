while (true){
    var oddNumber = parseInt(prompt("Please enter an odd number between 1 and 50. I will skip it."));
    if (oddNumber % 2 === 1 && oddNumber < 51 && oddNumber >=1){
        break;
    }
}

for (var i = 1; i<51; i+=2){
    if (i === oddNumber){
        console.log("Yikes! Skipping number: " + oddNumber);
        continue;
    }
    console.log(i);
}

// loop solution without continue -- use if-else instead

var oddNumber = parseInt(prompt("Please enter an odd number. I will skip it."));
for (i = 1; i<51; i+=2) {
    if (i == oddNumber) {
        console.log("Yikes! Skipping number: " + oddNumber);
    } else {
        console.log(i);
    }
}