import React from 'react';
import { ActivityIndicator } from 'react-native';


export default function Loading(props) {
  return (
    <ActivityIndicator style={{marginVertical: 20}} {...props}/>
  );
}

Loading.defaultProps = {
  color: '#6498e6',
  size: 22
};
