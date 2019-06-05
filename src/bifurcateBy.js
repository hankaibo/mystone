/**
 * 根据指定函数对数组进行过滤，符合条件的属于第一部分，否则属于第二部分。
 *
 * @since 0.0.1
 * @param {array} arr - 被判断的数组。
 * @param {function} fn - 指定的函数。
 * @returns {array} 一个新数组，第一部分是满足过滤函数的，第二部分是不满足的。
 * @example
 *
 * bifurcate(['beep','boop','foo','bar'], x=>x[0]==='b'); // [['beep','boop','bar'], ['foo']]
 */

const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);

export default bifurcateBy;
