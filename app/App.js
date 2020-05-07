import HTML5Backend from 'react-dnd-html5-backend'
import initialData from './initial-data'
import React, { useCallback, useState } from 'react'
import Tree from './components/Tree'
import { DndProvider } from 'react-dnd'
import { findItem, removeNode } from './utils'

const App = () => {
  const [tree, setTree] = useState(initialData)

  const moveItem = useCallback(
    (id, afterId, nodeId) => {
      if (id === afterId) return
      const newTree = [...tree]

      const item = { ...findItem(id, newTree) }
      if (!item.id) {
        return
      }

      const destination = nodeId ? findItem(nodeId, newTree).items : newTree

      if (!afterId) {
        removeNode(id, newTree)
        destination.push(item)
      } else {
        const index = destination.indexOf(destination.filter(destinationItem => destinationItem.id == afterId).shift())
        removeNode(id, newTree)
        destination.splice(index, 0, item)
      }

      setTree(newTree)
    },
    [tree]
  )

  return <Tree items={tree} moveItem={moveItem} parent={null} />
}

const AppWrapped = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  )
}

export default AppWrapped
