const initialState: any[] = []

const postReducer = (state = initialState, action: any) => {
  let postState
  switch (action.type) {
    case 'ADD_NOTE':
      postState = [...state, action.data]
      break
    case 'DELETE_NOTE':
      postState = state.filter((data: any) => data.id !== action.id)
      break
    case 'EDIT_NOTE':
      postState = state.filter((data: any) =>
        data.id !== action.id
          ? { ...data, edit: true }
          : { ...data, edit: false },
      )
      break
    case 'UPDATE_NOTE':
      postState = state.map((data: any) => {
        if (data.id === action.id) {
          return {
            ...data,
            title: action.data.title,
            description: action.data.description,
            date: action.data.date,
            edit: !data.edit,
          }
        } else {
          return data
        }
      })
      break
    default:
      postState = state
      break
  }
  return postState
}

export default postReducer
