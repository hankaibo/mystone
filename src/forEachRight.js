/**
 * 从数组的最后一个元素开始，为每个数组元素执行一次提供的函数。
 *
 * @since 0.0.1
 * @param {array} arr - 数组。
 * @param {function} callback - 回调函数。
 * @returns {void} 回调函数执行的结果。
 * @example
 *
 * forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
 */

const forEachRight = (arr, callback) => arr.slice(0).reverse().forEach(callback);

export default forEachRight;
