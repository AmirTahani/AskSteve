import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Wrapper(props) {
  return (
    <View style={[props.style, styles.container]}>
      <View style={styles.wrapper}>
        {props.children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 12,
  },
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1'
  }
});
