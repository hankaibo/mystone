/**
 * 根据给定的函数对数组元素进行分组。
 *
 * @since 0.0.1
 * @param {array} arr - 数组。
 * @param {function} fn - 函数。
 * @returns {object} 新对象。
 * @example
 *
 * groupBy([6.1, 4.2, 6.3], Math.floor); // {4: [4.2], 6: [6.1, 6.3]}
 *
 * groupBy(['one', 'two', 'three'], 'length'); // {3: ['one', 'two'], 5: ['three']}
 */

const groupBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i]);
    return acc;
  }, {});

export default groupBy;
