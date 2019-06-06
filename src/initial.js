/**
 * 返回除最后一个数组之外的数组的所有元素。
 *
 * @since 0.0.1
 * @param {array} arr - 数组。
 * @returns {array} 新数组。
 * @example
 *
 * initial([1, 2, 3]); // [1,2]
 */

const initial = arr => arr.slice(0, -1);

export default initial;
