const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  let newStr = '';
  let sum = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      sum += 1;
    } else {
      newStr += sum + str[i];
      sum = 1;
    }
  }


  return newStr.split().map((item) => item.replace(/1/g, '')).join()

}

module.exports = {
  encodeLine
};
