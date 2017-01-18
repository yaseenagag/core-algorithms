const setCompliment = ( arrayOne, arrayTwo ) => {
  let result = [],
      index

  for ( index = 0; index < arrayTwo.length; index++ ) {
    if ( !arrayOne.includes( arrayTwo[index] )) {
      result.push( arrayTwo[index] )
    }
  }

  return result
}

export default setCompliment
