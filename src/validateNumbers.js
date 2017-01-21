const validateNumbers = string => {
  let isValid = true,
    numberCounter = 0

  for (let index = 0; index < string.length; index++) {
    if ( checkIfNumber(string[index]) ) {
      numberCounter++
    }
  }

  if ( numberCounter < 10 ||
    !verifyParens( string ) ||
    !checkCountryCode( string, numberCounter) ) {

    isValid = false
  }

 return isValid
}

const checkCountryCode = ( string, count ) => {
  if ( count === 11 ) {
    return string[0] === '1' ? true : false
  }
  return true
}

const checkIfNumber = character => {
  let result = character.search(/([\d])/g)
  return result === -1 ? false : true
}

const verifyParens = string => {
  let parenCount = 0

  for ( let index = 0; index < string.length; index++ ) {
    if ( isParen(string[index]) ) {
      parenCount++
    }
  }
  
  if ( parenCount === 0 ) {
    return true
  } else if ( parenCount === 2 ) {
    return spaceBetweenParens(string) === 4 ? true : false
  } else {
    return false
  }
}

const isParen = character => {
  if ( character === '(' || character === ')' ) {
    return true
  }
}

const spaceBetweenParens = string => {
  return string.indexOf(')') - string.indexOf('(')
}

export default validateNumbers
