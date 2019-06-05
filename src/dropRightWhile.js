/**
 * 从数组末尾移除元素，直到传递的函数返回true。返回数组中的其余元素。
 *
 * @since 0.0.1
 * @param {array} arr - 原数组。
 * @param {function} func - 条件函数。
 * @returns {array} 过滤后的新数组。
 * @example
 *
 * dropRightWhile([1, 2, 3, 4], n=> n<3); // [1,2]
 */

const dropRightWhile = (arr, func) => {
  let rightIndex = arr.length;
  while (rightIndex-- && !func(arr[rightIndex])) ;
  return arr.slice(0, rightIndex + 1)
};

export default dropRightWhile;
