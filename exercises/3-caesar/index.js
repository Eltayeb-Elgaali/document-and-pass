/**
 * This function substitute each letter in the plaintext by a letter in a fixed number of positions down the alphabet.
 * 
 * @param {string} str - the string to be encrypted
 * @param {number} chr - how many letters to shift 
 * @returns {string} new encrypted string.
 *
 * @example
 *
 * caesar('A', 1) // shifts the letter by 1: returns 'B'
 *
 */
const caesar = (str,chr) => {
    if (chr < 0) {
        return caesar(str, chr + 26);
      }
      var output = "";
      for (var i = 0; i < str.length; i++) {
        var c = str[i];
    
        if (c.match(/[a-z]/i)) {
          
          var code = str.charCodeAt(i);

          if (code >= 65 && code <= 90) {
            c = String.fromCharCode(((code - 65 + chr) % 26) + 65);
          }
          else if (code >= 97 && code <= 122) {
            c = String.fromCharCode(((code - 97 + chr) % 26) + 97);
          }
        }
        output += c;
      }
      return output;

};

module.exports = caesar;
