/**
 * This function determines whether or not a given year is a leap year. Leap years are determined by the following rules:
 * Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) 
 * unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).
 * 
 * @param {number} year - the year to be checked
 * @returns {boolean} true if leap year and false if not.
 *
 * @example
 *
 * const year2003 = leapYears(2003);
 * console.log(year2003); // false
 *
 */
const leapYears = function (year) {
    return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

module.exports = leapYears
