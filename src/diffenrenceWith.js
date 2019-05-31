/**
 * Filters out all values from an array for which the comparator function does not return true.
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

const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

export default differenceWith;
