import React from 'react';
import FileUploader from '../components/FileUploader';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<FileUploader />);
});
