import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../../../src/Components/kit';


describe('<Button/>', () => {
  it('should render a button with children', () => {
    const tree = renderer.create(<Button>button Text</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a button with children and an onPress calback', () => {
    const tree = renderer.create(
      <Button
        onPress={() => {}}
      >
        button Text
      </Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
