/**
 * This function simply repeats the string a given number of times
 *
 * @param {string} str - the array from which the other arguments will be removed
 * @param {number} num - other arguments to be removed from the array
 * @returns {string} repeatedStr
 *
 * @example
 *
 * const str = repeatString('hey', 3)
 * console.log(str); // 'heyheyhey'
 *
 */
const repeatString = (str, num) => {
    if(typeof str !== 'string'){
        return;
    }
    if(typeof num !== 'number'){
        return;
    }
    if(num < 0){
        return 'ERROR';
    }
    let repeatString = '';
    for(let i = 0; i < num; i++){
        repeatString += str;
    }
    return repeatString;
}

module.exports = repeatString
