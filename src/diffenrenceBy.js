/**
 * Returns the difference between two arrays, after applying the provided function to each array element of both.
 *
 * @since 0.0.1
 * @param {array} a The array every was called upon.
 * @param {array} b The array every was called upon.
 * @param {array} fn The array every was called upon.
 * @returns {array} b The array every was called upon.
 * @example
 *
 * differenceBy([2.1,1.2],[2.3,3.4],Math.floor); // [1]
 *
 * differenceBy([{x:2},{x:1}],[{x:1}],v=>v.x); // [2]
 */

const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.map(fn).filter(el => !s.has(el));
};

export default differenceBy;
