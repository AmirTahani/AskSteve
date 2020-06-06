import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card } from '../../Components/kit';
import Avatar from "../../Components/kit/Avatar";

export default function Repo(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Card style={styles.card}>
        <Avatar source={{ uri: props.repo.owner.avatar_url }}/>
        <View style={styles.user}>
          <Text style={styles.text}>
            {props.repo.name}
          </Text>
          <Text style={styles.text}>
            {props.repo.owner.login}
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  text: {
    paddingHorizontal: 10
  },
  user: {
    display: 'flex',
    flexDirection: 'column',
  }
});
