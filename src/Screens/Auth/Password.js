import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { login } from '../../redux/Modules/auth';
import { Button, Input, Wrapper } from '../../Components/kit';

function Password({ navigation, route, login, auth }) {
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    login({ username: route.params.username, password });
  };

  return (
    <Wrapper style={styles.wrapper}>
      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button
        disabled={!password || auth.loading}
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


export default connect(state => ({
  auth: state.auth
}), {
  login
})(Password);

