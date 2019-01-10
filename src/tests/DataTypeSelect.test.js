import React from 'react';
import DataTypeSelect from '../components/DataTypeSelect';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<DataTypeSelect types={['a', 'b', 'c', 'd']} />);
});
