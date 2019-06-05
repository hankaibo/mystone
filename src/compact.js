/**
 * 从数组中删除假值。
 *
 * @since 0.0.1
 * @param {array} arr - 要判断的数组。
 * @returns {array} 移除假值后的新数组。
 * @example
 *
 * compact([0, 1, false, 2, '', 3, 'a', 'e'*23, NaN, 's', 34]); // [1,2,3,'a','s',34]
 */

const compact = arr => arr.filter(Boolean);

export default compact;
