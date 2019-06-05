/**
 * 判断数组中是否至少有一个元素通过测试函数。
 *
 * @since 0.0.1
 * @param {array} arr - 被迭代的数组。
 * @param {function} fn - 测试函数。
 * @returns {boolean} 如果有至少一个元素通过则返回true，否则返回false.
 * @example
 *
 * any([0,1,2,0], x=>x>=2); // true
 *
 * any([0,0,1,0]); //  true
 */
const any = (arr, fn = Boolean) => arr.some(fn);

export default any
