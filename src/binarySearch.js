const binarySearch = (array , number) => {
  let low = 0,
    high = (array.length - 1),
    mid

  while ( array[mid] !== number && low <= high ) {
    mid = Math.floor( (low + high) / 2 )
    if ( array[mid] < number ) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return array[mid] === number ? mid : 'Not Found Please Try Again!!!'
}

const recursiveBinarySearch = (array, number, low, high) => {
  if ( low > high ) {
    return - 1
  }
  const mid = Math.floor(( high + low ) / 2 )

  if ( number === array[mid] ) {
    return mid
  } else if ( array[mid] < number ) {
    return recursiveBinarySearch(array, number, mid + 1, high)
  } else {
    return recursiveBinarySearch(array, number, low, mid - 1)
  }
}

export { binarySearch, recursiveBinarySearch }
