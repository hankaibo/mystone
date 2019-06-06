/**
 * 使用指定的值初始化一个N维数组。
 *
 * @since 0.0.1
 * @param {object} val - 初始值。
 * @param {object} args - 剩余参数。
 * @returns {array} 数组。
 * @example
 *
 * initializeNDArray(1, 3); // [1,1,1]
 *
 * initializeNDArray(5, 2, 2, 2); // [[[5,5],[5,5]],[[5,5],[5,5]]]
 */

const initializeNDArray = (val, ...args) =>
  args.length === 0
    ? val
    : Array.from({length: args[0]}).map(() => initializeNDArray(val, ...args.slice(1)));


export default initializeNDArray;
