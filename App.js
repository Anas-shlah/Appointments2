import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import SignUp from './screens/UserRegistration/SignUp/SignUp';
import Login from './screens/UserRegistration/login/Login';
import Reservation from './screens/Reservation/Reservation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {UserInfoContext} from './Context/UserContext';
import Home from './screens/Home/Home';

const App = () => {
  const [userInfoContext, SetuserInfoContext] = useState();
  return (
    <UserInfoContext.Provider value={userInfoContext}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              animation: 'flip',
              contentStyle: {backgroundColor: '#dce1f4'},
            }}
            initialParams={{
              userInfoContext: userInfoContext,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false, animation: 'flip'}}
            initialParams={{
              SetuserInfoContext: SetuserInfoContext,
              userInfoContext: userInfoContext,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false, animation: 'fade_from_bottom'}}
            initialParams={{
              SetuserInfoContext: SetuserInfoContext,
              userInfoContext: userInfoContext,
            }}
          />
          <Stack.Screen
            name="Reservation"
            component={Reservation}
            options={{
              headerShown: false,
              animation: 'slide_from_right',
              contentStyle: {backgroundColor: '#dce1f4'},
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserInfoContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default App;
//5555  initialParams={{}}
