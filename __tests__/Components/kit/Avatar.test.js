import React from 'react';
import renderer from 'react-test-renderer';

import { Avatar } from '../../../src/Components/kit';


describe('<Avatar/>', () => {
  it('renders Avatar with a valid source', () => {
    const tree = renderer.create(<Avatar source={{ uri: 'https://example.com/' }}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Avatar with a default image', () => {
    const tree = renderer.create(<Avatar/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


