/**
 * 根据给定的函数对数组元素进行分组，并返回每组元素的计数。
 *
 * @since 0.0.1
 * @param {array} arr - 要分组的数组。
 * @param {function} fn - 条件函数。
 * @returns {object} 条件函数计数对象。
 * @example
 *
 * countBy([6.1,4.2,6.3], Math.floor); // {4:1, 6:2}
 *
 * countBy(['one','two','three'], 'length'); // {3:2, 5:1}
 */

const countBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

export default countBy;
