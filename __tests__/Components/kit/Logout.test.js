import React from 'react';
import renderer from 'react-test-renderer';
import { Logout } from '../../../src/Components/kit';


describe('<Logout/>', () => {
  it('should render logout button with a callback', () => {
    const tree = renderer.create(
      <Logout onPress={() => {
      }}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
