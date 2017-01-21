import { expect } from 'chai'
import validateNumbers from '../src/validateNumbers'

describe.only('validate numbers', () => {

  it('should be a function', () => {
    expect(validateNumbers).to.be.a('function')
  })

  it('should return a boolean', () => {
    expect(validateNumbers('555555')).to.be.a('boolean')
  })

  it('should return true', () => {
    expect(validateNumbers('1 555-555-5555')).to.eql(true)
  })

  it('should return true', () => {
    expect(validateNumbers('1 (555) 555-5555')).to.eql(true)
  })

  it('should return true', () => {
    expect(validateNumbers('5555555555')).to.eql(true)
  })

  it('should return false', () => {
    expect(validateNumbers('555-5555')).to.eql(false)
  })

  it('should return false', () => {
    expect(validateNumbers('1 555)555-5555')).to.eql(false)
  })

  it('should return false', () => {
    expect(validateNumbers('2 (555) 555-5555')).to.eql(false)
  })

  it('should return false', () => {
    expect(validateNumbers('-1 (757) 622-7382')).to.eql(false)
  })

  it('should return false', () => {
    expect(validateNumbers('2 (757) 622-7382')).to.eql(false)
  })

  it('should return false', () => {
    expect(validateNumbers('27576227382')).to.eql(false)
  })

  it('should return false', () => {
    expect(validateNumbers('(555)5(55?)-5555')).to.eql(false)
  })

})
