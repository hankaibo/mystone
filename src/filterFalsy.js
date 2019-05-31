/**
 * 过滤掉数组中的假值。
 *
 * @since 0.0.1
 * @param {array} arr - 数组。
 * @returns {array} 一个过滤后的新数组。
 * @example
 *
 * filterFalsy(['',true,{},false,'sample',1,0]); // [true,{},'sample',1];
 */

const filterFalsy = arr => arr.filter(Boolean);

export default filterFalsy;
