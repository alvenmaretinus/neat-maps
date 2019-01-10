import React from 'react';
import LoggedInRoutes from '../components/Routes/LoggedInRoutes';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<LoggedInRoutes />);
});
