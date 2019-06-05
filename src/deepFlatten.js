/**
 * 深度扁平化一个数组。
 *
 * @since 0.0.1
 * @param {array} arr - 要扁平化的数组。
 * @returns {array} 扁平化后的新数组。
 * @example
 *
 * deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
 */

const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

export default deepFlatten;
