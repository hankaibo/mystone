/**
 * 返回从右侧删除n个元素的新数组。
 *
 * @since 0.0.1
 * @param {array} arr - 原数组。
 * @param {number} n - 开始的索引。
 * @returns {array} 一个到右侧索引的新数组。
 * @example
 *
 * dropRight([1, 2, 3]); // [1,2]
 *
 * dropRight([1, 2, 3], 2); // [1]
 *
 * dropRight([1, 2, 3], 42); // []
 */

const dropRight = (arr, n = 1) => arr.slice(0, -n);

export default dropRight;
