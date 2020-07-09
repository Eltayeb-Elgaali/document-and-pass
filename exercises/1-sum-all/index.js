/**
 * This function takes 2 numbers and returns the sum of every number between(and including) them:
 *
 * @param {number} firstNumber - first number in the range
 * @param {number} lastNumber - last number in the range
 * @returns {number} result - the returned summation
 *
 * @example
 *
 * const result = sumAll(1, 4) 
 * console.log(result); // 10
 *
 */
const sumAll = (firstNumber, lastNumber) => {
    if(typeof firstNumber !== 'number' || firstNumber < 0){
        return 'ERROR';
    }
    if(typeof lastNumber !== 'number' || lastNumber < 0){
        return 'ERROR';
    }
    let result = 0;
    let temp = 0;
    if(lastNumber > firstNumber){
     temp = firstNumber;
     firstNumber = lastNumber;
     lastNumber = temp;
      }
    
    for(let i = firstNumber; i >= lastNumber; i--){
        result += i;
    }

    return result;
}


module.exports = sumAll
