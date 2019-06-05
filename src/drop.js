/**
 * 返回从左侧删除n个元素的新数组。
 *
 * @since 0.0.1
 * @param {array} arr - 原数组。
 * @param {number} n - 开始的索引位置。
 * @returns {array} 从指定索引开始的新数组。
 * @example
 *
 * drop([1, 2, 3]); // [2,3]
 *
 * drop([1, 2, 3], 2); // [3]
 *
 * drop([1, 2, 3], 42); // []
 */

const drop = (arr, n = 1) => arr.slice(n);

export default drop;
