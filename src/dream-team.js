const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if (Array.isArray(arr)) {

    let res = [];
    for (let item of arr) {
      if (typeof (item) === "string") {
        let a = item.toUpperCase();
        res.push(a.trim()[0])
      }
    }

    return res.sort().join('');
  }
  else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
