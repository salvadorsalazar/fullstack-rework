var number = 7;
// console.log(number + " * 1 = " + number * 1);
// console.log(number + " * 2 = " + number * 2);
// console.log(number + " * 3 = " + number * 3);

for (numberWeMultiplyBy = 1; numberWeMultiplyBy <= 10; numberWeMultiplyBy++){
    console.log(number + " * " + numberWeMultiplyBy + " = " + number * numberWeMultiplyBy);
}

function showMultiplicationTable(number){
    for (numberWeMultiplyBy = 1; numberWeMultiplyBy <= 10; numberWeMultiplyBy++){
        console.log(number + " * " + numberWeMultiplyBy + " = " + number * numberWeMultiplyBy);
    }
}

// The odd and even loop
// To figure out the right solution to generate a random number between 20 and 200,
// I create a loop that generates 500 of my solution

for (i=0; i<500; i++){
    console.log(Math.floor(Math.random() * 181) + 20);
}

// I want to be sure that I get 20s and 200s but nothing above or below

for (i = 0; i < 500; i++){
    var randomNum = Math.floor(Math.random()*181) + 20;
    if (randomNum < 20 || randomNum > 200) {
        console.log(randomNum);
        console.log("yooooooooooooooooooooooooo!")
    } else if (randomNum === 20 || randomNum === 200){
        console.log(randomNum);
        console.log("heeeeeeeeeeeeeeeeeeeeeey");
    }
    console.log(randomNum);
}

// Now I can use that solution in a smaller for loop with
// a conditional that determines if the number is odd or even

for (i=0; i < 10; i++){
    var randomNum = Math.floor(Math.random() * 181) + 20;
    if (randomNum % 2 === 0){
        console.log(randomNum + " is even");
    } else {
        console.log(randomNum + " is odd");
    }
}

// The number pyramid -- first solution using a while loop within a for loop

for (i = 1; i < 10; i++){
    var number = i;
    var count = 0;
    var outputString = "";
    while (count < number) {
        outputString = outputString + number.toString();
        count = count + 1;
    }
    console.log(outputString);
}

// Clean it up and make it a for loop within a for loop

for (var outer = 1; outer < 10; outer++){
    var output = "";
    for(var inner = 1; inner <= outer; inner++ ){
        output += outer;
    }
    console.log(output);
}

// Sebastian McKelvey's solution (a student in Draco):

var crazyOne = 1;
for (i = 1; i < 10; i++) {
    console.log(i * crazyOne);
    crazyOne  = crazyOne.toString() + 1;
}

// The most efficient and sleek solution:
for(var i = 1; i <= 9; i++){
    console.log(i.toString().repeat(i));
}

// A for loop that counts down from 100 to 5 by 5s

for (i = 100; i > 0; i = i-5){
    console.log(i);
}







