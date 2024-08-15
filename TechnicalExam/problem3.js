function comboMultiplyAlternate(baseNumber, maxLoop){
    let arrayToUse = []; // declare the array to use
    for (i = 1; i <= maxLoop; i++){ // for-loop that populates arrayToUse with baseNumber multiplied by i
        if (i % 2 != 0) { // if-statement that only populates arrayToUse with alternate values
            let result = baseNumber * i;
            arrayToUse.push(result);
        }
    } 
    console.log(arrayToUse);
}
comboMultiplyAlternate(1,5);
comboMultiplyAlternate(2,10);
/*
The function requires two variables: baseNumber, which is the number to be multiplied, and maxLoop which is the number 
of times the loop will repeat. The for-loop will allow us to multiply the baseNumber to i (variable on for-loop) and 
populate the array (if it satifies the if-statement) as long as i is <= to maxLoop. The if-statement will only 
populate the array with alternating values. Logic implemented is if i's remainder is not 0 when divided by 2, then populate
the array with result (which is equivalent to baseNumber * i).

I came up with this solution to potentially eliminate multi-looping that I implemented during the actual interview. With the 
use of if-statement, the program will be able to filter the values that goes into the array. It is a very straightforward attempt
to only display the alternating values in an array form.
*/
