/**
 * 删除数组中的元素，直到传递的函数返回true。返回数组中的其余元素。
 *
 * @since 0.0.1
 * @param {array} arr - 要删除的原数组。
 * @param {function} func - 条件函数。
 * @returns {array} 返回一个新数组。
 * @example
 *
 * dropWhile([1, 2, 3, 4], n=> n >= 3); // [3,4]
 */

const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

export default dropWhile;
