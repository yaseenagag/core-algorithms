import { expect } from 'chai'
import setUnion from '../src/setUnion'

describe('setUnion()', () => {

  it('should be a function', () => {
    expect(setUnion).to.be.a('function')
  })

  it('combine two arrays with different values', () => {
    const one = [ 1 ],
          two = [ 2,3 ]
    expect(setUnion( one, two )).to.deep.equal([1,2,3])
  })

  it('combine two arrays with some shared values', () => {
    const one = [ 1,2,3 ],
          two = [ 2,3 ]
    expect(setUnion( one, two )).to.deep.equal([1,2,3])
  })

})
