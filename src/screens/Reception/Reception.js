import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import auth from '@react-native-firebase/auth';
import EmailVerification from './EmailVerification';

const Reception = ({navigation}) => {
  if (auth().currentUser.emailVerified === false) {
    auth().currentUser.sendEmailVerification();
    return <EmailVerification navigation={navigation} />;
  } else if (auth().currentUser.displayName == null) {
    navigation.replace('InputInfoUser');
    return (
      <View style={styles.container}>
        <Text>Welcome To Reception</Text>
      </View>
    );
  } else {
    navigation.replace('Splash');
    return <View />;
  }
};
export default Reception;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
