/**
 * 根据过滤条件将数组分离为两过分。
 * 条件为真的元素属于第一部分，剩下的属于第二部分。
 *
 * @since 0.0.1
 * @param {array} arr - 被判断的数组。
 * @param {function} filter - 过滤函数。
 * @returns {array} 一个新数组，第一部分是满足过滤函数的，第二部分是不满足的。
 * @example
 *
 * bifurcate(['beep','boop','foo','bar'],[true,true,false,true]); // [['beep','boop','bar'],['foo']] *
 */

const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);

export default bifurcate;
