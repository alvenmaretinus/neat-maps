import React from 'react';
import DataTypeTable from '../components/DataTypeTable';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<DataTypeTable />);
});
