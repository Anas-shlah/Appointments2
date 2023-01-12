import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import auth from '@react-native-firebase/auth';
import EmailVerification from './EmailVerification';

const Reception = ({navigation}) => {
  const user = auth().currentUser;
  console.log('emailVerified ', user.emailVerified);
  const Verified = user.emailVerified;

  if (Verified === false) {
    return <EmailVerification navigation={navigation} />;
  } else {
    navigation.replace('InputInfoUser');
    return (
      <View style={styles.container}>
        <Text>Welcome To Reception</Text>
      </View>
    );
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
