/**
 * Removes elements from the end of an array until the passed function returns true.
 * Returns the remaining elements in the array.
 *
 * @since 0.0.1
 * @param {array} arr The array every was called upon.
 * @param {array} func The array every was called upon.
 * @param {array} fn The array every was called upon.
 * @returns {array} b The array every was called upon.
 * @example
 *
 * dropRightWhile([1,2,3,4], n=> n<3); // [1,2]
 */

const dropRightWhile = (arr, func) => {
  let rightIndex = arr.length;
  while (rightIndex-- && !func(arr[rightIndex])) ;
  return arr.slice(0, rightIndex + 1)
};

export default dropRightWhile;
