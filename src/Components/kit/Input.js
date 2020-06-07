import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function Input(props) {
  return (
    <TextInput style={styles.input} {...props}/>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#888888'
  }
});
