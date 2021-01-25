const CustomError = require('../extensions/custom-error')

module.exports = function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1
  const separator = options.separator || '+'
  const addition = options.addition === undefined ? '' : options.addition
  const additionRepeatTimes = options.additionRepeatTimes || 1
  const additionSeparator = options.additionSeparator || '|'

  let resultString = ''
  let additionString = ''

  for (let i = 0; i < repeatTimes; i++) {
    resultString += str
    additionString = ''
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionString += addition
      if (i !== additionRepeatTimes - 1) {
        additionString += additionSeparator
      }
    }
    resultString += additionString
    if (i !== repeatTimes - 1) {
      resultString += separator
    }
  }
  return resultString
}
