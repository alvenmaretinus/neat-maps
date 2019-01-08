export default (state = null, action) => {
  switch (action.type) {
    case 'GET_USER':
    case 'SET_USER':
    case 'REMOVE_USER':
      return action.payload;
    case 'ADD_CSV_DATA':
      if (!state.csvData) {
        return { ...state, csvData: [action.payload] }
      } else {
        if (state.csvData.length !== 3) {
          return { ...state, csvData: [...state.csvData, action.payload] };
        } else {
          return { ...state, csvData: [...state.csvData.filter((value, index) => index !== 0), action.payload] };
        }
      }
    default:
      return state;
  }
}
