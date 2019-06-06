/**
 * 初始化给定宽度、高度和值的二维数组。
 *
 * @since 0.0.1
 * @param {number} w - 宽。
 * @param {number} h - 高。
 * @param {object} val - 初始值。
 * @returns {array} 二维数组。
 * @example
 *
 * initialize2DArray(2, 2, 0); // [[0,0], [0,0]]
 */

const initialize2DArray = (w, h, val = null) =>
  Array.from({length: h}).map(() => Array.from({length: w}).fill(val));

export default initialize2DArray;
