import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {scale} from 'react-native-size-matters';
import ButtonSendEmail from '../../src/component/Buttons/ButtonSendEmail';
import Timer from '../../src/component/Timer/Timer';

const EmailVerification = props => {
  const {navigation} = props;
  const [timeSend, setTimeSend] = useState(true);
  const [refresh, setRefresh] = useState();

  auth().currentUser.reload();

  const user = auth().currentUser;
  const email = user.email;

  useEffect(() => {
    auth().currentUser.reload();
    console.log('hio: ', user.emailVerified);
    if (user.emailVerified == true) {
      navigation.replace('InputInfoUser');
    }
  }, [refresh]);

  const onSend = async () => {
    setTimeSend(true);
    await user.sendEmailVerification();
  };

  return (
    <View style={styles.container}>
      <Icon name="mark-email-unread" size={scale(160)} color="#feb048" />
      <Text style={styles.textTitle}>Your email has not been confirmed</Text>
      <Text style={styles.text}>
        Check your inbox. To forward the message to{' '}
        <Text style={styles.textemail}>{email}</Text>, click the button
      </Text>
      <View style={styles.containerButton}>
        {user.emailVerified == false && timeSend == false ? (
          <ButtonSendEmail onClick={onSend} />
        ) : (
          <Timer
            descending={true}
            maxSeconds={180}
            FunctionPeriodicallySeconds={5}
            FunctionPeriodically={() => {
              setRefresh(!refresh);
            }}
            deadlineFunction={() => {
              setTimeSend(false);
            }}
          />
        )}
      </View>
    </View>
  );
};

export default EmailVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: scale(30),
    textAlign: 'center',
    color: '#000',
  },
  text: {
    fontSize: scale(15),
    color: '#33B8FF',
    textAlign: 'center',
  },
  textemail: {
    fontWeight: 'bold',
  },
  containerButton: {
    margin: scale(20),
  },
});
