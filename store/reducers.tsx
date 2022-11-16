const postReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      // return [...state, action.payload];
      return state.concat([action.data])
    default:
      return state
  }
}

export default postReducer
