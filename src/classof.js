/**
 * Returns true if the provided predicate function returns true for
 * at least one element in a collection, false otherwise.
 *
 * @since 0.0.1
 * @param {object} o The array every was called upon.
 * @example
 *
 * classof(['123']); // => 'Array'
 */

const classof = o => {
  if (o === null) {
    return "Null";
  }
  if (o === undefined) {
    return "Undefined";
  }
  if (typeof o !== "object" && typeof o !== "function") {
    throw TypeError;
  }
  return Object.prototype.toString.call(o).slice(8, -1);
};

export default classof;
