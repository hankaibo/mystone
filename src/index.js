import pkg from '../package';
import all from './all';
import allEqual from './allEqual';
import any from './any';
import arrayToCSV from './arrayToCSV';
import bifurcate from './bifurcate';
import bifurcateBy from './bifurcateBy';
import chunk from './chunk';
import classof from './classof';
import compact from './compact';
import countBy from './countBy';
import countOccurrences from './countOccurrences';
import deepFlatten from './deepFlatten';
import difference from './difference';
import differenceBy from './differenceBy';
import differenceWith from './differenceWith';
import drop from './drop';
import dropRight from './dropRight';
import dropRightWhile from './dropRightWhile';
import dropWhile from './dropWhile';
import everyNth from './everyNth';
import filterFalsy from './filterFalsy';
import filterNonUnique from './filterNonUnique';
import filterNonUniqueBy from './filterNonUniqueBy';


let mystone = {};


/**
 * 未启用未启用未启用
 * @memberof util
 * @author 韩凯波 <hankaibo@hotmail.com>
 * @param {any} arr
 * @param {any} count
 */
function reduceArr(arr, count) {
  let len;
  let ar = [];
  let k = 0;
  if (arr.length % count === 0) {
    len = parseInt(arr.length / count);
  } else {
    len = parseInt(arr.length / count) + 1;
  }
  for (let m = 0; m < len; m++) {
    if (ar[m]) {
      ar[m] = ar[m];
    } else {
      ar[m] = [];
    }
    for (let n = 0; n < count; n++) {
      ar[m][n] = arr[k];
      if (a[m][n] === undefined) {
        a[m].length = arr.length % count;
      }
      k++;
    }
  }
}

/**
 * 数组对象去重法
 * @memberof util
 * @author 韩凯波 <hankaibo@hotmail.com>
 * @param {any} arr 一个数组
 * @returns 去重后的数组
 */
function unique(arr) {
  let result = [];
  let obj = {};
  let val;
  let type;
  for (let i = 0; i < arr.length; i++) {
    val = arr[i];
    type = typeof val;
    if (!obj[val]) {
      obj[val] = [type];
      result.push(val);
    } else if (obj[val].indexOf(type) < 0) {
      obj[val].push(type);
      result.push(val);
    }
  }
  return result;
}

/**
 * 获得地址栏参数
 * @memberof util
 * @author 韩凯波 <hankaibo@hotmail.com> *
 * @returns 一个对象
 */
function urlArgs() {
  let args = {};
  let query = location.search.substring(1);
  let pairs = query.split("&");
  for (let i = 0; i < pairs.length; i++) {
    let pos = pairs[i].indexOf("=");
    if (pos === -1) {
      continue;
    }
    let name = pairs[i].substring(0, pos);
    let value = pairs[i].substring(pos + 1);
    value = decodeURIComponent(value);
    args[name] = value;
  }
  return args;
}

mystone.version = `v${pkg.version}`;

mystone.all = all;
mystone.allEqual = allEqual;
mystone.any = any;
mystone.arrayToCSV = arrayToCSV;
mystone.bifurcate = bifurcate;
mystone.bifurcateBy = bifurcateBy;
mystone.chunk = chunk;
mystone.classof = classof;
mystone.compact = compact;
mystone.countBy = countBy;
mystone.countOccurrences = countOccurrences;
mystone.deepFlatten = deepFlatten;
mystone.difference = difference;
mystone.differenceBy = differenceBy;
mystone.differenceWith = differenceWith;
mystone.drop = drop;
mystone.dropRight = dropRight;
mystone.dropRightWith = dropRightWhile;
mystone.dropWhile = dropWhile;
mystone.everyNth = everyNth;
mystone.filerFalsy = filterFalsy;
mystone.filterNonUnique = filterNonUnique;
mystone.filterNonUniqueBy = filterNonUniqueBy;


mystone.reduceArr = reduceArr;
mystone.unique = unique;
mystone.urlArgs = urlArgs;

module.exports = mystone;
