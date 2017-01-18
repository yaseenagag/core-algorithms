const mergeSort = array => {
  if ( array.length < 2 ) {
    return array
  }

  const center = Math.floor( array.length / 2 ),
        leftArray = array.slice( 0, center ),
        rightArray = array.slice( center )

  return merge( mergeSort(leftArray), mergeSort(rightArray) )
}


const merge = ( leftArray, rightArray ) => {
  let result = []

  while ( leftArray.length && rightArray.length ) {
    if ( leftArray[0] < rightArray[0] ) {
      result.push( leftArray.shift() )
    } else {
      result.push( rightArray.shift() )
    }
  }

  if ( leftArray.length ) {
    result = result.concat( leftArray )
  } else if ( rightArray.length ) {
    result = result.concat( rightArray )
  }

  return result
}

export { mergeSort, merge }
