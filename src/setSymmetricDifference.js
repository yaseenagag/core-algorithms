const setSymmetricDifference = ( arrayOne, arrayTwo ) => {
  let result = [],
      index

  for ( index = 0; index < arrayOne.length; index++ ) {
    if ( !arrayTwo.includes( arrayOne[index] )) {
      result.push( arrayOne[index] )
    }
  }

  for ( index = 0; index < arrayTwo.length; index++ ) {
    if ( !arrayOne.includes( arrayTwo[index] )) {
      result.push( arrayTwo[index] )
    }
  }

  return result
}

export default setSymmetricDifference
