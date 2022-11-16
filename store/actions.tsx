export const addNote = (note: any) => {
  return {
    type: 'ADD_NOTE',
    note,
  }
}

export const removeNote = (id: any) => {
  return {
    type: 'REMOVE_NOTE',
    id,
  }
}
