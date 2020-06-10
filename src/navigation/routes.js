import * as React from "react";
import { connect } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Auth/Login";
import Password from "../Screens/Auth/Password";
import Home from "../Screens/Home/Home";
import Commits from "../Screens/Commits/Commits";
import { logout } from '../redux/Modules/logout';
import { Logout } from '../Components/kit';


const Stack = createStackNavigator();

function Routes({ auth, logout }) {
  const logoutOption = {
    headerRight: () => (
      <Logout onPress={logout}/>
    )
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          !auth.data.id ? <>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Password" component={Password}/>
          </> : <>
            <Stack.Screen options={logoutOption} name="Home" component={Home}/>
            <Stack.Screen options={logoutOption} name="Commits" component={Commits}/>
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default connect(state => ({
  auth: state.auth
}), {
  logout
})(Routes);
