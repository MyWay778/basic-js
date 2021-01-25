const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    !Number(sampleActivity) || 
    typeof sampleActivity !== 'string' ||
    sampleActivity > 15 ||
    sampleActivity < 0
    ) {
    return false
  }
  let k =  Math.LN2/HALF_LIFE_PERIOD
 return Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity)) / k)
};
