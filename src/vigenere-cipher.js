const CustomError = require('../extensions/custom-error')

class VigenereCipheringMachine {
  constructor(modification) {
    this.direct = modification === true || modification === undefined ? true : false
    this.alphabet = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z'
    ]
  }
  encrypt(message, key) {
    return this._crypt(message, key, !this.direct, false)
  }
  decrypt(message, key) {
    return this._crypt(message, key, !this.direct, true)
  }
  _crypt(message, key, reverse, decrypt) {
    let result = []
    let messageLetterIndex
    let keyLetterIndex
    let alphabetIndex

    message = message.toUpperCase()
    key = key.toUpperCase()
    for (let im = 0, ik = 0; im < message.length; im++) {
      messageLetterIndex = this.alphabet.indexOf(message[im])
      if (messageLetterIndex === -1) {
        result.push(message[im])
        continue
      }

      if (ik >= key.length) {
        ik = 0
      }
      keyLetterIndex = this.alphabet.indexOf(key[ik++])

      if (decrypt) {
        alphabetIndex = messageLetterIndex - keyLetterIndex
        if (alphabetIndex < 0) {
          alphabetIndex += 26
        }
      } else {
        alphabetIndex = Math.abs(messageLetterIndex + keyLetterIndex)
        if (alphabetIndex >= 26) {
          alphabetIndex -= 26
        }
      }
      result.push(this.alphabet[alphabetIndex])
    }
    if (reverse) {
      result.reverse()
    }
    return result.join('')
  }
}

module.exports = VigenereCipheringMachine
