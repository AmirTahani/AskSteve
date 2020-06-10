import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';


export default function Loading(props) {
  return (
    <ActivityIndicator style={styles.indicator} {...props}/>
  );
}

Loading.defaultProps = {
  color: '#6498e6',
  size: 22
};

const styles = StyleSheet.create({
  indicator: {
    marginVertical: 20
  }
});
