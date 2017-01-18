const setIntersection = ( arrayOne, arrayTwo ) => {
  let result = [],
      index

  for ( index = 0; index < arrayOne.length; index++ ) {
    if ( arrayTwo.includes( arrayOne[index] )) {
      result.push( arrayOne[index] )
    }
  }

  return result
}

export default setIntersection
