import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props) {
  return (
    <View style={[props.style, styles.wrapper]}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    elevation: 3,
    borderRadius: 8,
    marginVertical: 6,
    padding: 12,
  }
});
