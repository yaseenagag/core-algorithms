import { expect } from 'chai'
import { isPalindrome, removeNonWordCharacters, searchForNonWordCharacters, addToStringIfWordCharacter } from '../src/isPalindrome'

describe('isPalidrome()', () => {

  it('should be a function', () => {
    expect(isPalindrome).to.be.a('function')
  })

  it('should return true if input string is a palindrome', () => {
    expect(isPalindrome('radar', removeNonWordCharacters, searchForNonWordCharacters, addToStringIfWordCharacter)).to.equal(true)
  })

  it('should return false if input string is not a palindrome', () => {
    expect(isPalindrome('wearethebestteamever', removeNonWordCharacters, searchForNonWordCharacters, addToStringIfWordCharacter)).to.equal(false)
  })

  it('ignores punctuation, spacing and capitalization', () => {
    expect(isPalindrome('Ra..d ar', removeNonWordCharacters, searchForNonWordCharacters, addToStringIfWordCharacter)).to.equal(true)
  })

})
