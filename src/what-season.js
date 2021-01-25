const CustomError = require('../extensions/custom-error')

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (!date instanceof Date) {
    throw new Error('Invalid date!')
  }
  let resultToString = Object.prototype.toString.call(date)
  if (!resultToString.includes('Date')) {
    throw new Error('Tricky Date')
  }

  const month = date.getMonth()
  if (month <= 1 || month === 11) {
    return 'winter'
  } else if (month <= 4) {
    return 'spring'
  } else if (month <= 7) {
    return 'summer'
  } else if (month <= 10) {
    return 'autumn (fall)'
  }
}
