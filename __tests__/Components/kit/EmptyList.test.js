import React from 'react';
import renderer from 'react-test-renderer';
import { EmptyList } from '../../../src/Components/kit';


describe('<EmptyList/>', () => {
  it('should render with default props', () => {
    const tree = renderer.create(<EmptyList/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with given prop', () => {
    const tree = renderer.create(<EmptyList text="Test"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
