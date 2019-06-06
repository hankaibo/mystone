/**
 * 初始化一个数组，其中包含指定范围内的数字，其中start和end包含其公共差异步骤。
 *
 * @since 0.0.1
 * @param {number} end - 结束。
 * @param {number} start - 开始。
 * @param {number} step - 步长。
 * @returns {array} 数组。
 * @example
 *
 * initializeArrayWithRange(5); // [0,1,2,3,4,5]
 *
 * initializeArrayWithRange(7, 3); // [3,4,5,6,7]
 *
 * initializeArrayWithRange(9, 0, 2); // [0,2,4,6,8]
 */

const initializeArrayWithRange = (end, start = 0, step = 1) =>
  Array.from({length: Math.ceil((end - start + 1) / step)}, (v, i) => i * step + start);

export default initializeArrayWithRange;
