/**
 * Deep flattens an array.
 *
 * @since 0.0.1
 * @param {array} arr The array every was called upon.
 * @returns {function} fn
 * @example
 *
 * deepFlatten([1,[2],[[3],4],5]); // [1,2,3,4,5]
 */

const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

export default deepFlatten;
