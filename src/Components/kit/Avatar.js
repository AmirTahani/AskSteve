import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Avatar(props) {
  return (
    <Image
      source={props.source ? props.source : require('../../assets/images/avatar.jpeg')}
      style={styles.image}
      width={50} height={50}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 50,
    paddingLeft: 10
  }
});
