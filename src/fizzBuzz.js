const fizzBuzz = number => {
  let result = [],
    index,
    stringyString

  for (index = 1; index <= number; index++) {
    stringyString = ''

    if ( index % 3 === 0) {
      stringyString += 'Fizz'
    }
    if ( index % 5 === 0 ) {
      stringyString += 'Buzz'
    }
    
    stringyString.length ? result.push(stringyString) : result.push(index)
  }

  return result
}

export default fizzBuzz
