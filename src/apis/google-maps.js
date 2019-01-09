import axios from 'axios';

// Replace with your api key here to use google APIs
export const googleApiKey = 'AIzaSyD8b5FblW_D55TzN1xFBrq5BgP3KrQuQpc';

export default axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api'
});
