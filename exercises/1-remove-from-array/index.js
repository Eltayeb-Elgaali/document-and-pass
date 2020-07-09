/**
 * This function takes an array and some other arguments 
 * then removes the other arguments from that array
 *
 * @param {object} arr - the array from which the other arguments will be removed
 * @param {object} value - other arguments to be removed from the array
 * @returns {object} arr  after deletion
 *
 * @example
 *
 * const arr = removeFromArray([1, 2, 3, 4], 3);
 * console.log(arr); // [1,2,4]
 *
 */
const removeFromArray = (arr, ...value) => {
    if (!Array.isArray(arr)) {
        throw new TypeError('first parameter must be an array');
      }
    const forDeletion = value;
    arr = arr.filter(item => !forDeletion.includes(item))
    return arr;
};

module.exports = removeFromArray
