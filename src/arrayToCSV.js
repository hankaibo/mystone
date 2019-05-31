/**
 * 将2D数组转换为逗号分隔值(CSV)字符串。
 *
 * @since 0.0.1
 * @param {array} arr - 将被转换的数组。
 * @param {string} delimiter - 分隔符，默认为逗号“,”。
 * @returns {string}
 * @example
 *
 * arrayToCSV([['a','b'],['c','d']]); // '"a","b"\n"c","d"'
 *
 * arrayToCSV([['a','b'],['c','d']], ';'); // '"a";"b"\n"c";"d"'
 *
 * arrayToCSV([['a','"b" great'],['c',3.1415]]); // '"a","""b"" great"\n"c",3.1415' *
 */

const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x)).join(delimiter))
    .join('\n');

export default arrayToCSV;
