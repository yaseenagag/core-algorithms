import { expect } from 'chai'
import factorial from '../src/factorial'

describe('factorial()', () => {

  it('should be a function', () => {
    expect(factorial).to.be.a('function')
  })

  it('returns the factorial of the input', () => {
    expect(factorial( 5 )).to.equal(120)
  })

  it('returns the factorial of the input', () => {
    expect(factorial( 3 )).to.equal(6)
  })
})
