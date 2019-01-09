import axios from 'axios';

export const googleApiKey = 'AIzaSyD8b5FblW_D55TzN1xFBrq5BgP3KrQuQpc';

export default axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api'
});
