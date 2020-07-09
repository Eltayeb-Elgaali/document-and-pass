/**
 * This function simply reverse a given string
 *
 * @param {string} str - string to be reversed
 * @returns {string} reversedStr
 *
 * @example
 *
 * const result = reverseString('hello there');
 * console.log(result); // 'ereht olleh'
 *
 */
const reverseString = (str) => {
    if(typeof str !== 'string'){
        return;
    }
    let reversedStr = '';
    for(let i = str.length - 1; i >= 0; i--){
        reversedStr += str[i];
    }
   return reversedStr;
}

module.exports = reverseString
