const isPalidrome = string => {
  let reversedString = '',
      originalOnlyLetters = string.replace(/[\W_]/g, '').toLowerCase()

  for ( let index = string.length - 1; index >= 0; index-- ) {
    if ( string[index].search(/[\W_]/g) === -1 ) {
      reversedString += string[index]
    }
  }

  return originalOnlyLetters === reversedString.toLowerCase()
}

export default isPalidrome
