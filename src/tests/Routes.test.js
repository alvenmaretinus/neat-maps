import React from 'react';
import Routes from '../components/Routes';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Routes />);
});
