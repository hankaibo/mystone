/**
 * 返回数组中val的所有索引。如果val不存在，则返回[]。
 *
 * @since 0.0.1
 * @param {array} arr - 数组。
 * @param {object} val - 指定的对象。
 * @returns {array} 所有索引组成的数组。
 * @example
 *
 * indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
 *
 * indexOfAll([1, 2, 3], 4); // []
 */

const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

export default indexOfAll;
