const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
 
  let catEars = '^^';
  let sum = 0;
  for (let item of matrix) {
    for (let subItem of item) {
      if (subItem === catEars) {
        sum += 1;
      }
    }
  }
  return sum;


}

module.exports = {
  countCats
};
