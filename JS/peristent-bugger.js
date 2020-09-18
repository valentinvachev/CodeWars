
/* Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until you reach a single digit. */

function persistence(num) {
    
    while((num+"").length>1) {
        num = (num+"").split("").reduce((acc,curr)=>acc*curr,1);
    }
 }


 console.log(persistence(39));