/**
 * 根据提供的比较器函数筛选出数组中的非唯一值。
 *
 * @since 0.0.1
 * @param {array} arr - 数组。
 * @param {function} fn - 函数。
 * @returns {array} 一个过滤后的新数组。
 * @example
 *
 * filterNonUniqueBy(
 *    [
 *      {id: 0, value: 'a'},
 *      {id: 1, value: 'b'},
 *      {id: 2, value: 'c'},
 *      {id: 1, value: 'd'},
 *      {id: 0, value: 'e'}
 *    ],
 *    (a, b)=>a.id==b.id
 * ); // [{id:2,value:'c'}]
 */

const filterNonUniqueBy = (arr, fn) =>
  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));

export default filterNonUniqueBy;
