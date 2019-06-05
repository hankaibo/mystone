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
import findLast from './findLast';
import findLastIndex from './findLastIndex';


let mystone = {};

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
mystone.findLast = findLast;
mystone.findLastIndex = findLastIndex;

module.exports = mystone;
