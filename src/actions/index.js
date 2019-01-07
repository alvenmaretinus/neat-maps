export const initialGetUser = () => dispatch => {
  let data = null;

  if (typeof(Storage) !== 'undefined') {
    data = localStorage.getItem('user');
  }
  
  dispatch({
    type: 'GET_USER',
    payload: data
  });
};
