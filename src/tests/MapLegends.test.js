import React from 'react';
import MapLegends from '../components/MapLegends';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<MapLegends data={['1', '2', '3']} />);
});
