const initialState: any[] = []

const postReducer = (state = initialState, action: any) => {
  let postState
  switch (action.type) {
    case 'ADD_NOTE':
      postState = [...state, action.data]
      break
    default:
      postState = state
      break
  }
  return postState
}

export default postReducer
