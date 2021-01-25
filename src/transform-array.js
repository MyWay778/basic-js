const CustomError = require('../extensions/custom-error')

module.exports = function transform(arr) {
  if (!arr instanceof Array) {
    throw new Error('Arr is not an Array')
  }
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      switch (arr[i]) {
        case '--discard-next':
          i++
          continue
          break
        case '--discard-prev':
          if (arr[i - 2] !== '--discard-next') {
            result.pop()
          }
          break
        case '--double-next':
          if (arr[i + 1] !== undefined) {
            result.push(arr[i + 1])
          }
          break
        case '--double-prev':
          if (arr[i - 1] !== undefined && arr[i - 2] !== '--discard-next') {
            result.push(arr[i - 1])
          }
          break
        default:
          result.push(arr[i])
      }
    } else {
      result.push(arr[i])
    }
  }
  return result
}
