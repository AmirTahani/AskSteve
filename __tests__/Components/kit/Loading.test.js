import React from 'react';
import renderer from 'react-test-renderer';
import { Loading } from '../../../src/Components/kit';


describe('<Loading/>', () => {
  it('should render a Indicator with default props', () => {
    const tree = renderer.create(<Loading/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a Indicator with different size and color', () => {
    const tree = renderer.create(<Loading size={40} color="#000"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
