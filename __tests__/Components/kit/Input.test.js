import React from 'react';
import renderer from 'react-test-renderer';
import { Input } from '../../../src/Components/kit';


describe('<Input/>', () => {
  it('should render a TextInput with custom styles', () => {
    const tree = renderer.create(<Input/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
