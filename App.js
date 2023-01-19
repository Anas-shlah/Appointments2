import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import CreateUserEmail from './screens/UserRegistration/CreateUserEmail/CreateUserEmail';
import Login from './screens/UserRegistration/login/Login';
import Reservation from './screens/Reservation/Reservation';
import Reception from './screens/Reception/Reception';
import Home from './screens/Home/Home';
import InputInfoUser from './screens/GetStarted/InputInfoUser/InputInfoUser';
import Splash from './screens/GetStarted/Splash/Splash';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {UserInfoContext} from './Context/UserContext';

const App = () => {
  const [userInfoContext, SetuserInfoContext] = useState();

  return (
    <UserInfoContext.Provider value={userInfoContext}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Splash'}>
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
            name="CreateUserEmail"
            component={CreateUserEmail}
            options={{headerShown: false, animation: 'flip'}}
            initialParams={{
              SetuserInfoContext: SetuserInfoContext,
              userInfoContext: userInfoContext,
            }}
          />
          <Stack.Screen
            name="Reception"
            component={Reception}
            options={{headerShown: false, animation: 'flip'}}
            initialParams={{
              SetuserInfoContext: SetuserInfoContext,
              userInfoContext: userInfoContext,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              animation: 'slide_from_left',
              contentStyle: {backgroundColor: '#dce1f4'},
            }}
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
          <Stack.Screen
            name="InputInfoUser"
            component={InputInfoUser}
            options={{
              headerShown: false,
              animation: 'simple_push',
              contentStyle: {backgroundColor: '#202b58'},
            }}
          />
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
              animation: 'simple_push',
              contentStyle: {backgroundColor: '#202b58'},
            }}
            initialParams={{
              SetuserInfoContext: SetuserInfoContext,
              userInfoContext: userInfoContext,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserInfoContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
