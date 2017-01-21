import setSymmetricDifference from './setSymmetricDifference'

const symmetricDifference = (...args) => {
  return args.reduce( ( prev, cur ) => {
    return setSymmetricDifference( prev, cur )
  }).sort()
}

export default symmetricDifference
