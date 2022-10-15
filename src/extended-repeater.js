const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  let addition = options.addition !== undefined ? String(options.addition) : '';
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  let separator = options.separator ? options.separator : '+';
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;

  let additionRepeat = '';

  if (additionRepeatTimes > 1) {
    while (additionRepeatTimes - 1 >= 1) {
      additionRepeat += additionSeparator + addition;
      additionRepeatTimes--;
    }
  }
  str = str + addition + additionRepeat;


  let strRepeat = '';

  if (repeatTimes > 1) {
    while (repeatTimes - 1 >= 1) {
      strRepeat += separator + str;
      repeatTimes--;
    }
  }

  str = str + strRepeat;

  return str;

}

module.exports = {
  repeater
};
