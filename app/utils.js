const findItem = (id, items) => {
  for (const node of items) {
    if (node.id == id) return node
    if (node.items && node.items.length) {
      const result = findItem(id, node.items)
      if (result) {
        return result
      }
    }
  }
  return false
}

const removeNode = (id, items) => {
  for (const node of items) {
    if (node.id == id) {
      items.splice(items.indexOf(node), 1)
      return
    }

    if (node.items && node.items.length) {
      removeNode(id, node.items)
    }
  }
}

export { findItem, removeNode }
