/**
 * 判断一个对象的类型。
 *
 * @since 0.0.1
 * @param {object} o - 要判断的对象。
 * @returns {string} 小写的对象的类型。
 * @example
 *
 * classof(['123']); // 'array'
 *
 * classof(null); // 'object'
 */

const classof = o => Object.prototype.toString.call(o).slice(8, -1).toLowerCase();

export default classof;
