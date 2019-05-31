/**
 * Returns the difference between two arrays.
 *
 * @since 0.0.1
 * @param {array} a The array every was called upon.
 * @returns {array} b The array every was called upon.
 * @example
 *
 * difference([1,2,3],[1,2,4]); // [3]
 */

const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

export default difference;
