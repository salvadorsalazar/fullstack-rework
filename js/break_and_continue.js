(function breakContinue() {
    var oddNumber = prompt("Please enter an odd number between 1 and 50: ");
    oddNumber = Number(oddNumber);
    do {
        if(oddNumber <= 50 && oddNumber > 0 && oddNumber % 2 !== 0
            && isNaN(parseFloat(oddNumber)) === false) {
            break;
        } else {
            oddNumber = prompt('Invalid input.  Please enter an ODD NUMBER between 1 and 50: ')
        }
    } while (oddNumber > 50 || oddNumber <= 0 || oddNumber % 2 === 0 || isNaN(parseFloat(oddNumber)) === true);

    for (var i = 1; i < 50; i += 2) {

        if(i === oddNumber) {
           document.write('Yikes , Skipping number : ' + i);
           // console.log('Yikes! Skipping number: ' + i )
            continue;
        } document.write("<br>");
        document.write('Here is an odd number: ' + i +'\n');

        //console.log('Here is an odd number: ' + i )
    }
})();
