/**
 *
 *
 * @since 0.0.1
 * @param {array} arr The array every was called upon.
 * @param {function} fn
 * @returns {function} fn
 * @example
 *
 * bifurcate(['beep','boop','foo','bar'],x=>x[0]==='b'); // [['beep','boop','bar'],['foo']] *
 */

const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);

export default bifurcateBy;
