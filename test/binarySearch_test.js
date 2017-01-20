import { expect } from 'chai'
import { binarySearch, recursiveBinarySearch } from '../src/binarySearch'

describe('binarySearch()', () => {

  it('should be a function', () => {
    expect(binarySearch).to.be.a('function')
  })

  it('return index of the second argument', () => {
    const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    expect(binarySearch(numbers, 45)).to.deep.equal(8)
  })

  it('return index of the second argument', () => {
    const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    expect(binarySearch(numbers, 100)).to.equal('Not Found Please Try Again!!!')
  })

  it('returns index of second argument using recursion!', () => {
    const amazingArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
          amazingLength = amazingArray.length

    expect(recursiveBinarySearch(amazingArray, 40, 0, amazingLength))
      .to.equal(7)
  })

})
