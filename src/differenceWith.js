/**
 * 过滤掉比较器函数未返回true的数组中的所有值。
 *
 * @since 0.0.1
 * @param {array} arr - 数组。
 * @param {number} val - 值。
 * @param {function} comp 比较函数。
 * @returns {array} 一个新数组。
 * @example
 *
 * differenceBy([2.1,1.2],[2.3,3.4],Math.floor); // [1]
 *
 * differenceBy([{x:2},{x:1}],[{x:1}],v=>v.x); // [2]
 */

const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

export default differenceWith;
