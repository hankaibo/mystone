/**
 * 返回两个数组的差集。
 *
 * @since 0.0.1
 * @param {array} a - 第一个数组。
 * @param {array} b - 第二个数组。
 * @returns {array} 第一个数组与第二个数组的差集。
 * @example
 *
 * difference([1, 2, 3], [1, 2, 4]); // [3]
 */

const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

export default difference;
