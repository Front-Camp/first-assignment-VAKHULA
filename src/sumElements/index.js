/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
  function toNumber(val) {
    return val === Infinity ?
      0 :  val === -Infinity ?
      0 : Number(val) ?
      Number(val) : parseFloat(val) ?
      parseFloat(val) : 0;
  };

  return arr.reduce((a, b) => {
    return toNumber(a) + toNumber(b);
  }, 0);
};

export default sumElements;
