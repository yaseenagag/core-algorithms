const factorial = number => {
  let result = 1

  for (let index = 1; index <= number; index++) {
    result *= index
  }

  return result
}

const recursiveFactorial = number => {
  if ( number === 1 ) {
    return number
  }

  return recursiveFactorial( number - 1 ) * number
}

export { factorial, recursiveFactorial }
