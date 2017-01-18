import { expect } from 'chai'
import collatzConjecture from '../src/collatzConjecture'

describe('collatzConjecture()', () => {

  it('should be a function', () => {
    expect(collatzConjecture).to.be.a('function')
  })

  it('return the Collatz sequence for a given number', () => {
    expect(collatzConjecture(7)).to.deep.equal([7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1])
  })

})
