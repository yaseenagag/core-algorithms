import { expect } from 'chai'
import isConnected from '../src/isConnected'

describe.only('isConnected()', () => {

  it('should be a function', () => {
    expect(isConnected).to.be.a('function')
  })

  it('returns false if graph is empty', () => {
    const graph = {}
    expect(isConnected(graph)).to.equal(false)
  })

  it('returns true if graph has no disconnected points ', () => {
    const graph = {
      'a': ['b', 'c'],
      'b': ['a', 'd'],
      'c': ['a', 'd'],
      'd': ['b', 'c'],
    }
    expect(isConnected(graph)).to.equal(true)
  })

  it('returns false if graph has any disconnected points ', () => {
    const graph = {
      'a': ['b'],
      'b': ['a'],
      'c': ['d'],
      'd': ['c'],
    }
    expect(isConnected(graph)).to.equal(false)
  })

})
