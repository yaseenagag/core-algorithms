import { expect } from 'chai'
import setIntersection from '../src/setIntersection'

describe('setIntersection()', () => {

  it('should be a function', () => {
    expect(setIntersection).to.be.a('function')
  })

  it('should return an array with values that intersect', () => {
    const one = [ 1,2,3,4 ],
          two = [ 1,6,7,4 ]
    expect(setIntersection( one, two )).to.deep.equal([ 1,4 ])
  })

  it('should return an array with values that intersect', () => {
    const one = [ 1,2,3,4 ],
          two = [ 1,2,3,4 ]
    expect(setIntersection( one, two )).to.deep.equal([ 1,2,3,4 ])
  })

  it('should return an empty array if no values intersect', () => {
    const one = [ 1,2,3,4,5,6 ],
          two = [ 7,8,9 ]
    expect(setIntersection( one, two )).to.deep.equal([])
  })
})
