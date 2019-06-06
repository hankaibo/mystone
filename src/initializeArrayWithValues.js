/**
 * 使用指定的值初始化并填充数组。
 *
 * @since 0.0.1
 * @param {number} n - 长度。
 * @param {object} val - 初始值。
 * @returns {array} 数组。
 * @example
 *
 * initializeArrayWithValues(5, 2); // [2, 2, 2, 2, 2]
 */

const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val);

export default initializeArrayWithValues;
