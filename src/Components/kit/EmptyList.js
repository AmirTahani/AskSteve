import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function EmptyList() {
  return (
    <Text style={styles.text}>Nothing to show</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    alignSelf: 'center',
    marginVertical: 20
  }
});
