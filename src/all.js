/**
 * 判断数组中的所有元素是否可以通过测试函数.
 *
 * @since 0.0.1
 * @param {array} arr - 被迭代的数组。
 * @param {function} fn - 用于测试每个元素的函数。
 * @returns {boolean} 如果提供的函数对数组中的所有元素返回true，则返回true，否则返回false.
 * @example
 *
 * all([4,2,3], x=>x>1); // true
 *
 * all([1,2,3]); // true
 */
const all = (arr, fn = Boolean) => arr.every(fn);

export default all
