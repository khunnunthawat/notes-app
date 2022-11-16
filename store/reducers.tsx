const postReducer = (state = [], action: { type: any; data: any }) => {
  let postState
  switch (action.type) {
    case 'ADD_NOTE':
      // return [...state, action.payload];
      postState = [...state, action.data]
      break
    default:
      postState = state
      break
  }
  return postState
}

export default postReducer
