const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0 
  for(let part of backyard) {
    part.forEach( value => {
      if (value === '^^') {
        count++
      }
    })
  }
  return count
};
