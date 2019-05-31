/**
 * Returns a new array with n elements removed from the left.
 *
 * @since 0.0.1
 * @param {array} a The array every was called upon.
 * @param {array} b The array every was called upon.
 * @param {array} fn The array every was called upon.
 * @returns {array} b The array every was called upon.
 * @example
 *
 * drop([1,2,3]); // [2,3]
 *
 * drop([1,2,3],2); // [3]
 *
 * drop([1,2,3],42); // []
 */

const drop = (arr, n = 1) => arr.slice(n);

export default drop;
