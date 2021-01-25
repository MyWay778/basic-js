const CustomError = require('../extensions/custom-error')

const chainMaker = {
  _chain: [],
  getLength() {
    return this._chain.length
  },
  addLink(value) {
    if (value !== undefined) {
      this._chain.push(`( ${value} )`)
    } else {
      this._chain.push(`(  )`)
    }

    return this
  },
  removeLink(position) {
    if (typeof position !== 'number' || !Number.isInteger(position) || !this._chain[position]) {
      this._chain = []
      throw new Error('invalid position')
    }
    this._chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this._chain.reverse()
    return this
  },
  finishChain() {
    if (this._chain.length > 1) {
      this._chain = this._chain.map((link, ind) => {
        if (ind === 0) {
          return link + '~'
        }
        if (ind === this._chain.length - 1) {
          return '~' + link
        }
        return '~' + link + '~'
      })
    }
    let output = this._chain.join('')
    this._chain = []
    return output
  }
}

module.exports = chainMaker
