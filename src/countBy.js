/**
 * Groups the elements of an array based on the given function and returns the count of elements in each group.
 *
 * @since 0.0.1
 * @param {array} arr The array every was called upon.
 * @returns {function} fn
 * @example
 *
 * countBy([6.1,4.2,6.3],Math.floor); // {4:1, 6:2}
 *
 * countBy(['one','two','three'], 'length'); // {3:2, 5:1}
 */

const countBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

export default countBy;
