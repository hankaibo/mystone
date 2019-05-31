/**
 * 过滤掉数组中的非唯一值。
 *
 * @since 0.0.1
 * @param {array} arr - 数组。
 * @returns {array} 一个过滤后的新数组。
 * @example
 *
 * filterNonUnique([1,2,2,3,4,4,5]); // [1,3,5]
 */

const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

export default filterNonUnique;
