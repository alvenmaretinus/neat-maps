import axios from 'axios';

export default axios.create({
  baseURL: 'http://neat-mvp-api.herokuapp.com/v1'
});
