const setSymmetricDifference = ( arrayOne, arrayTwo ) => {
  let result = [],
      alreadyAdded = [],
      index

  for ( index = 0; index < arrayOne.length; index++ ) {
    let current = arrayOne[index]
    if ( !arrayTwo.includes( current )) {
      if ( !alreadyAdded.includes( current))
        result.push( current )
        alreadyAdded.push( current )
      }
  }

  alreadyAdded = []

  for ( index = 0; index < arrayTwo.length; index++ ) {
    let current = arrayTwo[index]
    if ( !arrayOne.includes( current )) {
      if ( !alreadyAdded.includes( current) )
        result.push( current )
        alreadyAdded.push( current )
      }
  }

  return result
}

export default setSymmetricDifference
