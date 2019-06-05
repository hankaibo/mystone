/**
 * 判断数组中的所有元素是否相等。
 *
 * @since 0.0.1
 * @param {array} arr - 被迭代的数组。
 * @returns {boolean} 所有元素相等，返回true；否则返回false.
 * @example
 *
 * allEqual([1,2,3,4,5,6]); // false
 *
 * allEqual([1,1,1,1]); // true
 */
const allEqual = arr => arr.every(val => val === arr[0]);

export default allEqual
