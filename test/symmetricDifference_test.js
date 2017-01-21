import { expect } from 'chai'
import symmetricDifference from '../src/symmetricDifference'

describe('symmetricDifference()', () => {

  it('should be a function', () => {
    expect(symmetricDifference).to.be.a('function')
  })

  it('should return symmetric difference of two arrays', () => {
    expect(symmetricDifference([1, 2, 3], [5, 2, 1, 4]))
      .to.deep.equal([3, 4, 5])
  })

  it('should return symmetric difference of two arrays', () => {
    expect(symmetricDifference([1, 2, 5], [2, 3, 5], [3, 4, 5]))
      .to.deep.equal([1, 4, 5])
  })

  it('should return symmetric difference of two arrays', () => {
    expect(symmetricDifference([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]))
      .to.deep.equal([1, 2, 4, 5, 6, 7, 8, 9])
  })

  it('should return symmetric difference of two arrays', () => {
    expect(symmetricDifference([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]))
      .to.deep.equal([2, 3, 4, 6, 7])
  })

})
