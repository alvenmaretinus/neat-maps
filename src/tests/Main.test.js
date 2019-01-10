import React from 'react';
import Main from '../components/Main';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Main />);
});
