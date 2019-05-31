/**
 * Chunks an array into smaller arrays of specified size.
 *
 * @since 0.0.1
 * @param {array} arr The array every was called upon.
 * @returns {number} size
 * @example
 *
 * chunk([1,2,3,4,5],2); // [[1,2],[3,4],[5]]
 */

const chunk = (arr, size) =>
  Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

export default chunk;
