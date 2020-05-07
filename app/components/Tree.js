import Item from './Item'
import React from 'react'
import { findItem } from '../utils'
import { useDrop } from 'react-dnd'

const Tree = ({ items, parentId, moveItem }) => {
  const [{}, dropRef] = useDrop({
    accept: 'item',
    // drop: () => {},
    // collect: monitor => ({
    // isOver: !isPrimary && !!monitor.isOver({ shallow: true }),
    // canDrop: !!monitor.canDrop(),
    // item: monitor.getItem(),
    // dropOffset: monitor.getSourceClientOffset(),
    // }),
    hover: (draggedItem, monitor) => {
      if (!monitor.isOver({ shallow: true })) return

      const descendantNode = findItem(parentId, draggedItem.items)
      if (descendantNode) return
      if (draggedItem.parentId == parentId || draggedItem.id == parentId) return

      moveItem(draggedItem.id, undefined, parentId)
    },
  })

  if (!items) return null

  return (
    <div
      ref={dropRef}
      style={{
        position: 'relative',
        minHeight: 10,
        paddingTop: 10,
        marginTop: -11,
        marginLeft: '2em',
      }}
    >
      {items.map(item => (
        <Item id={item.id} item={item} key={item.id} moveItem={moveItem} parentId={parentId} />
      ))}
    </div>
  )
}

export default Tree
