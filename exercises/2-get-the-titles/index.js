/**
 * This function take an array of objects that represent books with an author and a title as an argument
 * It returns an array of titles.
 * 
 * @param {object} arr - array of objects
 * @returns {object} titlesArr - array of titles
 *
 * @example
 *
 * getTheTitles(books) // ['Book','Book2']
 *
 */
const getTheTitles = (arr) => {
    const titlesArr = arr.map(a => a.title);
    return titlesArr;
}

module.exports = getTheTitles;
