import React from 'react';
import NotLoggedInRoutes from '../components/Routes/NotLoggedInRoutes';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<NotLoggedInRoutes />);
});
