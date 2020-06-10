import React from 'react';
import { StyleSheet } from 'react-native';
import renderer from 'react-test-renderer';
import { Wrapper } from '../../../src/Components/kit';


describe('<Wrapper/>', () => {
  it('should render a Wrapper with custom styles', () => {
    const tree = renderer.create(<Wrapper/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f7f7f7'
    }
  });

  it('should render a Wrapper with given styles', () => {
    const tree = renderer.create(<Wrapper style={styles.container}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
