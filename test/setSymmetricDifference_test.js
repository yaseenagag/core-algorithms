import { expect } from 'chai'
import setSymmetricDifference from '../src/setSymmetricDifference'

describe('setSymmetricDifference()', () => {

  it('should be a function', () => {
    expect(setSymmetricDifference).to.be.a('function')
  })

  it('should return an array of items not in the intersection of the sets', () => {
    const one = [ 1,2,3 ],
          two = [ 2,3,4 ]
    expect(setSymmetricDifference( one,two )).to.deep.equal([ 1,4 ])
  })

  it('should return an empty array', () => {
    const one = [ 1,2,3 ],
          two = [ 1,3,2 ]
    expect(setSymmetricDifference( one,two )).to.deep.equal([])
  })

  it('should an array with all values if they are all different', () => {
    const one = [ 1,2, { a: 1 } ],
          two = [ 5,8 ]
    expect(setSymmetricDifference( one,two )).to.deep.equal([ 1,2,{ a: 1 },5,8 ])
  })

})
