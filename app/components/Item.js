import React from 'react'
import Tree from './Tree'
import { useDrag, useDrop } from 'react-dnd'

const Item = ({ item, parentId, moveItem }) => {
  const [{}, dropRef] = useDrop({
    accept: 'item',
    canDrop: false,
    hover: (draggedItem, monitor) => {
      if (draggedItem.id === item.id || draggedItem.id === parentId) return
      if (!monitor.isOver({ shallow: true })) return

      moveItem(draggedItem.id, item.id, parentId)
    },
  })

  const [{}, dragRef] = useDrag({
    item: {
      id: item.id,
      parentId,
      items: item.items,
      type: 'item',
    },
    isDragging: monitor => item.id == monitor.getItem().id,
  })

  return (
    <div ref={dropRef}>
      <div
        ref={dragRef}
        style={{
          background: 'white',
          border: '1px solid #ccc',
          padding: '1em',
          marginBottom: -1,
        }}
      >
        {item.title}
      </div>
      <Tree items={item.items} moveItem={moveItem} parentId={item.id} />
    </div>
  )
}

export default Item
