import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Input, Button, Wrapper } from '../../Components/kit';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    navigation.navigate('Password', {
      username
    });
  };
  return (
    <Wrapper style={styles.wrapper}>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <Button
        disabled={!username}
        onPress={handleSubmit}
      >
        Submit
      </Button>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'center'
  }
});
