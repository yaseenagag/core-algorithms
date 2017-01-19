import { expect } from 'chai'
import bubbleSort from '../src/bubbleSort'

describe('bubbleSort()', () => {

  it('should be a function', () => {
    expect(bubbleSort).to.be.a('function')
  })

  it('returns a sorted asc array', () => {
    expect(bubbleSort([ 1, 5, 4 ])).to.deep.equal([ 1, 4, 5 ])
  })

  it('returns a sorted asc array if input requires multiple passes', () => {
    expect(bubbleSort([ 1, 5, 4, 7, 3 ])).to.deep.equal([ 1, 3, 4, 5, 7 ])
  })

  it('returns a sorted asc array when input array is dsc', () => {
    expect(bubbleSort([ 100, 99, 3, 2, 1 ])).to.deep.equal([ 1, 2, 3, 99, 100 ])
  })

})
