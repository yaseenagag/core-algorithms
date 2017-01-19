import { expect } from 'chai'
import { closestPair, distance } from '../src/closestPair'

describe('closestPair() and distance()', () => {

  context('distance()', () => {

    it('should be a function', () => {
      expect(distance).to.be.a('function')
    })

    it('should return the distance between two points', () => {
      expect(distance( [1, 1], [1, 2] )).to.equal(1)
    })

    it('should return the distance between two points', () => {
      expect(distance( [0, 6], [7, 9] )).to.equal(7.615773105863909)
    })
  })

  context('closestPair()', () => {

    it('should be a function', () => {
      expect(closestPair).to.be.a('function')
    })

    it('should return infinity if there is only one pair given', () => {
      const points = [[1,2]]
      expect(isFinite(closestPair(points))).to.equal(false)
    })

    it('returns the first two pairs if only two are given', () => {
      const points = [ [1,2],[2,4] ]
      expect(closestPair(points))
        .to.deep.equal({ pair: [ [1,2],[2,4] ], distance: 2.23606797749979 })
    })

    it('should return the pair of points closest to eachother', () => {
      const points = [
        [2,1],
        [4,0],
        [-1,0],
        [5,3],
        [-2,5],
        [3,-3],
        [-2,0],
        [3,4],
        [5,-4],
        [0,-2]
      ]
      expect(closestPair(points)).to.deep.equal({ pair: [[-1, 0], [-2, 0]], distance: 1 })
    })


  })

})
