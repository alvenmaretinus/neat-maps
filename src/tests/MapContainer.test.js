import React from 'react';
import MapContainer from '../components/MapContainer';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<MapContainer />);
});
