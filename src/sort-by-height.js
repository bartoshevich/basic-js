const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let numbersToSort = [];
  let minusPosition = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      minusPosition.push(i);
    } else {
      numbersToSort.push(arr[i])
    }
  }

  numbersToSort.sort((a, b) => a - b)

  for (let i = 0; i < minusPosition.length; i++) {
    numbersToSort.splice(minusPosition[i], 0, -1)
  }

  return numbersToSort;

}

module.exports = {
  sortByHeight
};
