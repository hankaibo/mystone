/**
 * 将数组展平到指定深度。
 *
 * @since 0.0.1
 * @param {array} arr - 数组。
 * @param {number} depth - 指定深度，默认为1。
 * @returns {array} 扁平指定深度后新数组。
 * @example
 *
 * flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
 *
 * flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
 */

const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

export default flatten;
