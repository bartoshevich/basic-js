const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let str = ('' + n);
  let arr2 = [];
  
  for (let i = 0; i < str.length; i++) {
    arr2.push(str.slice(0, i ) + str.slice(i+1))
  }
  
  for (let i = 0; i < arr2.length; i++) {
    arr2[i] = arr2[i] * 1
  }
  
  return Math.max.apply(Math, arr2)

}

module.exports = {
  deleteDigit
};
