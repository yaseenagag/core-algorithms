import { expect } from 'chai'
import setCompliment from '../src/setCompliment'

describe('setCompliment()', () => {

  it('should be a function', () => {
    expect(setCompliment).to.be.a('function')
  })

  it('should return elements that exist only in second array', () => {
    const one = [1,2,3,4],
          two = [1,2,3,5,6]
    expect(setCompliment(one,two)).to.deep.equal([5,6])
  })

  it('should return nothing if array two contains no unique elements', () => {
    const one = [1,2,3,4],
          two = [1,2,3,4]
    expect(setCompliment(one,two)).to.deep.equal([])
  })

})
