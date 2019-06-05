/**
 * 返回所提供函数返回Truthy值的最后一个元素。
 *
 * @since 0.0.1
 * @param {array} arr - 数组。
 * @param {function} fn - 函数。
 * @returns {number} 过滤后的值。
 * @example
 *
 * findLast([1, 2, 3, 4], n=> n%2 ===1); // 3
 */

const findLast = (arr, fn) => arr.filter(fn).pop();

export default findLast;
