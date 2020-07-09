/**
 * This function returns a specific member of the fibonacci sequence
 * Fibonacci is a a series of numbers in which each number ( Fibonacci number ) 
 * is the sum of the two preceding numbers.
 * 
 * @param {number} max - the order of the member to be returned
 * @returns {number} nextNumber - the returned member (Fibonacci number)
 *
 * @example
 *
 * fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
 *
 */
const fibonacci = (max) => {
    let maxNumber = 0 ;
    if(typeof max !== 'number'){
        maxNumber = Number(max);
    }
    else{
        maxNumber = max;
    }
    if(maxNumber < 0) return 'OOPS';
    let firstNumber = 1;
    let secondNumber = 1;
    let nextNumber = firstNumber + secondNumber;
    //let result = firstNumber + ', ' + secondNumber + ', ' + nextNumber;
    for(let i = 3; i < maxNumber; i++){
        firstNumber = secondNumber;
        secondNumber = nextNumber;
        nextNumber = firstNumber + secondNumber;
        //result += ', ' + nextNumber;
    }
    if(maxNumber === 2 || maxNumber === 1) return 1;
    return nextNumber;
}
module.exports = fibonacci
