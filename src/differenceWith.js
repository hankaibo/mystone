/**
 * 过滤掉比较器函数未返回true的数组中的所有值。
 *
 * @since 0.0.1
 * @param {array} arr - 数组。
 * @param {array} val - 值。
 * @param {function} comp 比较函数。
 * @returns {array} 一个新数组。
 * @example
 *
 * differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2]
 */

const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

export default differenceWith;
