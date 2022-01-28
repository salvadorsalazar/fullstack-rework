function describeNumber(num){
    let obj={};
        if(typeof num ==='number' || typeof parseInt(num)==='number'){
            obj.value = parseInt(num);
                if( num %2 ==0){
                    obj.evenOrOdd = 'even';
                }else{
                   obj.evenOrOdd='odd';
                }
                    obj.numberOfDigits = num.toString().length;

        }
    return obj;

}  

// console.log(describeNumber('123'));


function muFunction(){
    console.log('hello');
}


// describeNumber(45) // {value: 45, evenOrOdd: "odd", numberOfDigits: 2};
// describeNumber(360) // {value: 360, evenOrOdd: "even", numberOfDigits: 3};
// describeNumber(0) // {value: 0, evenOrOdd: "even", numberOfDigits: 1};
 // describeNumber("123") // {value: 123, evenOrOdd: "odd", numberOfDigits: 3};