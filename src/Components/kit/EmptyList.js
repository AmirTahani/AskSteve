import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function EmptyList(props) {
  return (
    <Text style={styles.text}>{props.text}</Text>
  );
}

EmptyList.defaultProps = {
  text: 'Nothing to Show'
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    alignSelf: 'center',
    marginVertical: 20
  }
});
