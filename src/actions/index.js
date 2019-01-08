export const getUser = () => dispatch => {
  let data = null;

  if (typeof(Storage) !== 'undefined') {
    data = JSON.parse(localStorage.getItem('user'));
  }
  
  dispatch({
    type: 'GET_USER',
    payload: data
  });
};

export const setUser = ({ id, email }) => dispatch => {
  if (typeof(Storage) !== 'undefined') {
    localStorage.setItem('user', JSON.stringify({ id, email }));  
  }

  dispatch({
    type: 'SET_USER',
    payload: { id, email }
  });
};

export const removeUser = () => dispatch => {
  if (typeof(Storage) !== 'undefined') {
    localStorage.removeItem('user');  
  }

  dispatch({
    type: 'REMOVE_USER',
    payload: null
  });
}

export const addCsvData = data => {
  if (typeof(Storage) !== 'undefined') {
    let localData = JSON.parse(localStorage.getItem('user'));

    if (!localData.csvData) {
      localData.csvData = [data];
    } else {
      if (localData.csvData.length !== 3) {
        localData.csvData.push(data);
      } else {
        localData.csvData = [...localData.csvData.filter((value, index) => index !== 0), data];
      }
    }

    localStorage.setItem('user', JSON.stringify(localData));
  }

  return {
    type: 'ADD_CSV_DATA',
    payload: data
  }
}
