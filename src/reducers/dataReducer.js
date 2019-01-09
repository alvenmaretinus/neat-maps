export default (state = [], action) => {
  switch (action.type) {
    case 'GET_DATA':
    case 'REMOVE_DATA':
      return action.payload;
    case 'ADD_DATA':
      if (state.length === 0) {
        return [ action.payload ]
      } else {
        if (state.length !== 3) {
          return [ ...state, action.payload ];
        } else {
          return [ ...state.filter((value, index) => index !== 0), action.payload ];
        }
      }
    default:
      return state;
  }
}
