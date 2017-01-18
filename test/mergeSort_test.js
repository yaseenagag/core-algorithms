import { expect } from 'chai'
import { mergeSort, merge } from '../src/mergeSort'

describe('mergeSort() and merge()', () => {

  context('merge()', () => {

    it('should be a function', () => {
      expect(merge).to.be.a('function')
    })

    it('should add two sorted arrays together in ascending order', () => {
      expect(merge( [1, 3, 5], [2, 6, 8] )).to.deep.equal( [1, 2, 3, 5, 6, 8] )
    })

    it('should add two sorted arrays together in ascending order', () => {
      expect(merge( [1, 3, 5], [2, 6, 7, 8 , 9] ))
        .to.deep.equal( [1, 2, 3, 5, 6, 7, 8, 9] )
    })

    it('should add two sorted arrays together in ascending order', () => {
      expect(merge( [1, 3, 5, 10, 11, 12, 13], [2, 6, 7, 8, 9, ] ))
        .to.deep.equal( [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13] )
    })

  })

  context('merge()', () => {

    it('should be a function', () => {
      expect(mergeSort).to.be.a('function')
    })

    it('should return a sorted asc array', () => {
      expect(mergeSort([200, 10, 2, 7, 5, 8, 3, 6, 1, 4, 9, 59, 100, 167]))
        .to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 59, 100, 167, 200])
    })

    it('should return a sorted asc array', () => {
      expect(mergeSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9]))
        .to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })

  })
})
