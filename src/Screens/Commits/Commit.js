import React from 'react';
import moment from 'moment';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '../../Components/kit';
import Avatar from "../../Components/kit/Avatar";

export default function Commit(props) {
  const { commit } = props;
  return (
    <Card style={styles.card}>
      <Avatar source={commit.author ? { uri: commit.author.avatar_url } : null}/>
      <View style={styles.user}>
        <Text style={styles.text}>
          {commit.commit.author.name}
        </Text>
        <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
          {commit.commit.message}
        </Text>
      </View>
      <View>
        <Text style={styles.text}>
          {moment(commit.commit.committer.date).fromNow()}
        </Text>
      </View>
    </Card>
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
    paddingHorizontal: 10,
  },
  user: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
  }
});
