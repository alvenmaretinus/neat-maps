export default (state = null, action) => {
  switch (action.type) {
    case 'GET_USER':
    case 'SET_USER':
    case 'REMOVE_USER':
      return action.payload;
    default:
      return state;
  }
}
