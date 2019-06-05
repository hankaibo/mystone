/**
 * 将数组分成指定大小的较小数组。
 *
 * @since 0.0.1
 * @param {array} arr - 要分割的数组。
 * @param {number} size - 指定块的大小。
 * @return {array} 一个指定大小的新数组。
 * @example
 *
 * chunk([1,2,3,4,5], 2); // [[1,2],[3,4],[5]]
 */

const chunk = (arr, size) =>
  Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

export default chunk;
