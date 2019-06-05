/**
 * 返回使用过滤函数之后的两个数组的差异。
 *
 * @since 0.0.1
 * @param {array} a - 数组a。
 * @param {array} b - 数组b。
 * @param {function} fn - 过滤函数。
 * @returns {array} 先过滤函数再用数组a减去数组b。
 * @example
 *
 * differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1]
 *
 * differenceBy([{x:2}, {x:1}], [{x:1}], v=>v.x); // [2]
 */

const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.map(fn).filter(el => !s.has(el));
};

export default differenceBy;
