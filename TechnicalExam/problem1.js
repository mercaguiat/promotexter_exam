function printMultiply(baseNumber){ 
    let arrayToUse = []; // declare the array to use
    for (i = 1; i <=  10; i++) { // for-loop that populates arrayToUse with baseNumber multiplied by i
        let result = baseNumber * i;
        arrayToUse.push(result);
    }
    console.log(arrayToUse);
}
printMultiply(5);
printMultiply(10);
