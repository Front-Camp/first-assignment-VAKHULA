/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  arr = arr.filter((iteratee) => {
      return iteratee !== -Infinity && iteratee !== Infinity && Number.isInteger(iteratee);
  });

  return Math.max(...arr);
};

export default max;
