/**
 * 初始化一个数组，其中包含指定范围内的数字(反向)，其中start和end包含其公共差异步骤。
 *
 * @since 0.0.1
 * @param {number} end - 结束。
 * @param {number} start - 开始。
 * @param {number} step - 步长。
 * @returns {array} 数组。
 * @example
 *
 * initializeArrayWithRangeRight(5); // [5,4,3,2,1,0]
 *
 * initializeArrayWithRangeRight(7, 3); // [7,6,5,4,3]
 *
 * initializeArrayWithRangeRight(9, 0, 2); // [8,6,4,2,0]
 */

const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>
  Array.from({length: Math.ceil((end + 1 - start) / step)}).map(
    (v, i, arr) => (arr.length - i - 1) * step + start
  );

export default initializeArrayWithRangeRight;
