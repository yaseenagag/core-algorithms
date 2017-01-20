const isPalindrome = ( string, callbackOne, callbackTwo, callbackThree ) => {
  let reversedString = '',
    onlyLetters = callbackOne( string )

  for ( let index = string.length - 1; index >= 0; index-- ) {
    reversedString += callbackThree( string, index, callbackTwo )
  }

  return onlyLetters === reversedString.toLowerCase()
}

const addToStringIfWordCharacter = ( string, index, callback ) => {
  if ( callback( string, index ) === -1 ) {
    return string[index]
  } else {
    return ''
  }
}

const removeNonWordCharacters = string => {
  return string.replace(/[\W_]/g, '').toLowerCase()
}

const searchForNonWordCharacters = ( string, index ) => {
  return string[index].search(/[\W_]/g)
}

export { isPalindrome, removeNonWordCharacters, searchForNonWordCharacters, addToStringIfWordCharacter }
