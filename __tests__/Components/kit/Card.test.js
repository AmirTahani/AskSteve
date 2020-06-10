import React from 'react';
import { Text, StyleSheet } from 'react-native';
import renderer from 'react-test-renderer';
import { Card } from '../../../src/Components/kit';

describe(`<Card/>`, () => {
  it('should render a Card with children', () => {
    const tree = renderer.create(
      <Card>
        <Text>Children Test</Text>
      </Card>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should Render a Card with children and different styles', () => {
    const styles = {
      card: {
        backgroundColor: '#f7f7f7'
      }
    };

    const tree = renderer.create(
      <Card style={styles.card}>
        <Text>Children Test</Text>
      </Card>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});





