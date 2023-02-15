import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';

import CreateUserEmail from './src/screens/UserRegistration/CreateUserEmail/CreateUserEmail';
import Login from './src/screens/UserRegistration/login/Login';
import Reservation from './src/screens/Reservation/Reservation';
import Reception from './src/screens/Reception/Reception';
import Home from './src/screens/Home/Home';
import InputInfoUser from './src/screens/GetStarted/InputInfoUser/InputInfoUser';
import Splash from './src/screens/GetStarted/Splash/Splash';
import Settings from './src/screens/settings/Settings';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import {UserInfoContext} from './src/Context/UserContext';
import {
  NotificationListner,
  requestUserPermission,
} from './src/utils/pushnotification_helper';

const App = () => {
  const [userInfoContext, SetuserInfoContext] = useState();
  useEffect(() => {
    requestUserPermission();
    NotificationListner();
  }, []);
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
          />
          <Stack.Screen
            name="Reception"
            component={Reception}
            options={{headerShown: false, animation: 'flip'}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              animation: 'slide_from_left',
              contentStyle: {backgroundColor: '#dce1f4'},
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
            name="settings"
            component={Settings}
            options={{
              headerShown: true,
              animation: 'slide_from_left',
              headerTitleAlign: 'center',
              headerStyle: styles.headerSettings,
              contentStyle: {backgroundColor: '#33bcbf'},
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
  headerSettings: {
    backgroundColor: '#00b4ad',
  },
});

export default App;
