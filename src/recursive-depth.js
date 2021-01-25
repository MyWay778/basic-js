const CustomError = require('../extensions/custom-error')

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let deepCount = 1
    let maxDepth = 0
    arr.forEach(element => {
      if (element instanceof Array) {
        let currentDepth = this.calculateDepth(element)
        if (currentDepth > maxDepth) {
          maxDepth = currentDepth
        }
      }
    })
    deepCount += maxDepth
    return deepCount
  }
}
