const isConnected = graph => {
  let allNodes = Object.keys(graph)

  if ( allNodes.length === 0 ) {
    return false
  }

  let rootNode = allNodes[0],
    neighborStack = Array.from(graph[rootNode]),
    visitedNodes = [rootNode]


  while ( neighborStack.length ) {
    let currentNode = neighborStack.pop()

    if ( !visitedNodes.includes(currentNode) ) {
      visitedNodes.push(currentNode)
      let neighborsOfCurrentNode = graph[currentNode]

      neighborsOfCurrentNode.forEach( neighbor => {
        if ( !neighborStack.includes(neighbor) ) {
          neighborStack.push(neighbor)
        }
      })
    }
  }

  return allNodes.reduce(( truthAccumulator, node ) => {
    return truthAccumulator && visitedNodes.includes(node)
  }, true)
}


//Punit's version
var hasVisitedNode = (nodes, node) => {
  return nodes.indexOf(node) >= 0
}

var isConnected2 = graph => {
  const allNodes = Object.keys(graph)
  const startNode = allNodes[0]
  const visitedNodes = [startNode]
  let neighborsStack = Array.from(graph[startNode])
  while(neighborsStack.length !== 0) {
    const node = neighborsStack.pop()
    if(!hasVisitedNode(visitedNodes, node)){
      visitedNodes.push(node)
      const neighbors = graph[node]
      neighbors.map(neighbor => {
        if(!hasVisitedNode(visitedNodes, neighbor)) {
          neighborsStack.push(neighbor)
        }
      })
    }
  }
  return allNodes.reduce((visitedAll, node) => {
    return visitedAll && hasVisitedNode(visitedNodes, node)
  }, true)

}

export default isConnected
