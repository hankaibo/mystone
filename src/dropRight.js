/**
 * Returns a new array with n elements removed from the right.
 *
 * @since 0.0.1
 * @param {array} a The array every was called upon.
 * @param {array} b The array every was called upon.
 * @param {array} fn The array every was called upon.
 * @returns {array} b The array every was called upon.
 * @example
 *
 * dropRight([1,2,3]); // [1,2]
 *
 * dropRight([1,2,3],2); // [1]
 *
 * dropRight([1,2,3],42); // []
 */

const dropRight = (arr, n = 1) => arr.slice(0, -n);

export default dropRight;
