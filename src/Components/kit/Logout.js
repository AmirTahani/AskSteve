import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Logout(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text>Logout</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginRight: 10
  }
});
