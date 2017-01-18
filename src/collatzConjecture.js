const factorial = number => {
  let result = [number],
      currentNumber = number

  while ( currentNumber !== 1 ) {
    if ( currentNumber % 2 === 0 ) {
      currentNumber = currentNumber / 2
      result.push( currentNumber )
    } else {
      currentNumber = currentNumber * 3 + 1
      result.push( currentNumber )
    }
  }

  return result
}

export default factorial
