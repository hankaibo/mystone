/**
 * 计算数组中某个值的出现次数。
 *
 * @since 0.0.1
 * @param {array} arr - 发判断的数组。
 * @param {number} val - 判断的值。
 * @returns {number} 该值在数组中出现的次数。
 * @example
 *
 * countOccurrences([1,1,2,1,2,3], 1); // 3
 */

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

export default countOccurrences;
