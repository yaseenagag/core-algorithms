const closestPair = array => {
  if ( array.length < 2 ) {
    return Infinity
  } else {
    let minimumDistance = distance( array[0], array[1] ),
      minimumPoints = array.slice( 0, 2 ),
      index,
      nestedIndex

    for ( index = 0; index < array.length - 1; index++ ) {
      for ( nestedIndex = index + 1; nestedIndex < array.length; nestedIndex ++ ) {
        const currentDistance = distance( array[index], array[nestedIndex] )

        if ( minimumDistance > currentDistance ) {
          minimumDistance = currentDistance
          minimumPoints = [ array[index], array[nestedIndex] ]
        }

      }
    }

    return { pair: minimumPoints, distance: minimumDistance }
  }

}

const distance = (point1, point2) => {
  const distanceX = Math.abs(point1[0] - point2[0]),
    distanceY = Math.abs(point1[1] - point2[1])

  return Math.sqrt( distanceX * distanceX + distanceY * distanceY )
}



export { closestPair, distance }
