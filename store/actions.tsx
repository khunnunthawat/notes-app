export const addNote = (note: any) => {
  return {
    type: 'ADD_NOTE',
    note,
  }
}

export const updateNote = (id: any) => {
  return {
    type: 'UPDATE_NOTE',
    id,
  }
}

export const removeNote = (id: any) => {
  return {
    type: 'REMOVE_NOTE',
    id,
  }
}
