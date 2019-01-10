import React from 'react';
import Login from '../components/Login';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Login />);
});
