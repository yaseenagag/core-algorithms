const bubbleSort = array => {
  let index,
      swapped = true,
      previous,
      current

  while ( swapped ) {
    swapped = false

    for ( index = 1; index < array.length; index ++ ) {
      current = array[index]
      previous = array[index - 1]

      if ( current < previous ) {
        array[index - 1] = current
        array[index] = previous
        swapped = true
      }
    }
  }

  return array
}

export default bubbleSort
