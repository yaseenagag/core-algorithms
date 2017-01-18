const setUnion = ( one, two ) => {
  let union = one,
      index

  for ( index = 0; index < two.length; index++ ) {
    if ( !one.includes( two[index] ) ) {
      union.push( two[index] )
    }
  }

  return union
}

export default setUnion
