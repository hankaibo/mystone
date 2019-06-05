/**
 * 返回最后一个元素的索引，为此提供的函数返回一个Truthy值。
 *
 * @since 0.0.1
 * @param {array} arr - 数组。
 * @param {function} fn - 函数。
 * @returns {number} 过滤后的新值的原索引。
 * @example
 *
 * findLastIndex([1, 2, 3, 4], n => n % 2 === 1); // 2 (index of the value 3)
 */

const findLastIndex = (arr, fn) =>
  arr.map((val, i) => [i, val])
    .filter(([i, val]) => fn(val, i, arr))
    .pop()[0];

export default findLastIndex;
