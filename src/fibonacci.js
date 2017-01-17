const fibonacci = number => {
  let result = [],
      currentNumber = 0,
      previousNumber = 0,
      index,
      nextNumber

  for ( index = 0; index < number; index++ ) {
    if ( index < 2 ) {
      result.push( index )
      currentNumber = 1
    } else {
      nextNumber = currentNumber + previousNumber
      result.push( nextNumber )
      previousNumber = currentNumber
      currentNumber = nextNumber
    }
  }

  return result
}

export default fibonacci
