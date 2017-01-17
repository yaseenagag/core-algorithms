import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz( 100 )', () => {

  it('should be a function', () => {
    expect(fizzBuzz).to.be.a('function')
  })

  it('returns an array with length 100', () => {
    expect(fizzBuzz( 100 ).length).to.equal(100)
  })

  it('numbers divisible by 3 should be Fizz', () => {
   expect(fizzBuzz( 100 )[2]).to.equal('Fizz')
   expect(fizzBuzz( 100 )[5]).to.equal('Fizz')
   expect(fizzBuzz( 100 )[8]).to.equal('Fizz')
   expect(fizzBuzz( 100 )[11]).to.equal('Fizz')
  })

  it('numbers divisible by 5 should be Buzz', () => {
   expect(fizzBuzz( 100 )[4]).to.equal('Buzz')
   expect(fizzBuzz( 100 )[9]).to.equal('Buzz')
  })

  it('numbers divisible by 5 and 3 should be FizzBuzz', () => {
   expect(fizzBuzz( 100 )[14]).to.equal('FizzBuzz')
   expect(fizzBuzz( 100 )[29]).to.equal('FizzBuzz')
  })

})
