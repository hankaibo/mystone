/**
 * Counts the occurrences of a value in an array.
 *
 * @since 0.0.1
 * @param {array} arr The array every was called upon.
 * @returns {function} fn
 * @example
 *
 * countOccurrences([1,1,2,1,2,3],1); //3
 */

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

export default countOccurrences;
