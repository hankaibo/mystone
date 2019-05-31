/**
 * Removes falsey values from an array.
 *
 * @since 0.0.1
 * @param {array} arr The array every was called upon.
 * @returns {number} size
 * @example
 *
 * compact([0,1,false,2,'',3,'a','e'*23,NaN,'s',34]); // [1,2,3,'a','s',34]
 */

const compact = arr => arr.filter(Boolean);

export default compact;
