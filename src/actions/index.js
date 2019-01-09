import googleMaps, { googleApiKey } from '../apis/google-maps';
import { camelCased, lowerCased } from '../helpers';

export const getUser = () => dispatch => {
  if (typeof(Storage) !== 'undefined') {
    let data = JSON.parse(localStorage.getItem('user'));

    if (data) {
      dispatch({
        type: 'GET_USER',
        payload: data
      });
    }
  }
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

export const addData = (data, dataTypeIndex) => async dispatch => {
  
  const getCategoryArray = (index, data) => {
    let list = [];

    data.forEach(row => {
      if (list.indexOf(row[index]) === -1) {
        list.push(row[index]);
      }
    });
    return list;
  }

  const addressTypeIndex = dataTypeIndex.indexOf('ADDRESS');
  const postalCodeTypeIndex = dataTypeIndex.indexOf('ZIPCODE');
  const categoryTypeIndex = dataTypeIndex.indexOf('CATEGORY');
  const categoryArray = getCategoryArray(categoryTypeIndex, data);
  
  const promises = data.map(async row => {
    let formattedAddress = row[addressTypeIndex].replace(/ /g, '+');
    let postalCode = row[postalCodeTypeIndex];
    let queryString = `/geocode/json?address=${formattedAddress}&components=postal_code:${postalCode}&key=${googleApiKey}`;

    return (await googleMaps.get(queryString)).data.results[0];
  });

  let results = await Promise.all(promises);
  
  let processedResult = [];
  results.forEach((value, index) => {
    if (value) {
      processedResult.push([
        data[index], { ...value.geometry.location }
      ]);
    }
  });

  let categoryObj = {};
  categoryArray.forEach(value => {
    categoryObj[camelCased(value)] = processedResult.filter(row => row[0][categoryTypeIndex] === value);
  });
  for (let category in categoryObj) {
    categoryObj[category] = categoryObj[category].map(list => {
      let dataObject = {};
      dataTypeIndex.forEach((value, index) => {
        dataObject[lowerCased(value)] = list[0][index];
        dataObject.location = {
          ...list[1]
        }
      })
      return dataObject;
    })
  }
  
  if (typeof(Storage) !== 'undefined') {
    let localData = JSON.parse(localStorage.getItem('data'));

    if (!localData) {
      localData = [categoryObj];
    } else {
      if (localData.length !== 3) {
        localData.push(categoryObj);
      } else {
        localData = [...localData.filter((value, index) => index !== 0), categoryObj];
      }
    }

    localStorage.setItem('data', JSON.stringify(localData));
  }

  dispatch({
    type: 'ADD_DATA',
    payload: categoryObj
  })
}

export const getData = () => dispatch => {
  if (typeof(Storage) !== 'undefined') {
    let data = JSON.parse(localStorage.getItem('data'));

    if (data) {
      dispatch({
        type: 'GET_DATA',
        payload: data
      });
    }
  }
};

export const removeData = () => dispatch => {
  if (typeof(Storage) !== 'undefined') {
    localStorage.removeItem('data');  
  }

  dispatch({
    type: 'REMOVE_DATA',
    payload: []
  });
}
