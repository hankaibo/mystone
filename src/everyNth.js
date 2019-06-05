/**
 * 返回数组中的每个第n个元素
 *
 * @since 0.0.1
 * @param {array} arr - 数组。
 * @param {number} nth - 第n个元素。
 * @returns {array} 一个过滤后的新数组。
 * @example
 *
 * everyNth([1, 2, 3, 4, 5, 6], 2); // [2,4,6]
 */

const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);

export default everyNth;
