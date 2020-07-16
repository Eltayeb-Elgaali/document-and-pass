/**
 * This function determines whether a string is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.
 * 
 * @param {string} str - the string to be checked
 * @returns {boolean} true if palindromes and false if not.
 *
 * @example
 *
 * const isStrPalindrome = palindromes('hah');
 * console.log(isStrPalindrome); // true
 *
 */
const palindromes = (str) => {
    var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
};

module.exports = palindromes;
