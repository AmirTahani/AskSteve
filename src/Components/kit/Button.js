import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function Button(props) {
  return (
    <TouchableOpacity
      style={styles.button}
      {...props}
    >
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6498e6',
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 4
  },
  text: {
    color: '#fff',
    fontSize: 16,
    justifyContent:'center',
    alignSelf: 'center'
  }
});
