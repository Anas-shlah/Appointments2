import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';

import {
  HandlerPassword,
  HandlerEmail,
  HandlerConfirmPassword,
} from '../../../utils/Handlerinput';
import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';

import FireSignUp from './CreateUserEmailFirebase';
import ModalMessage from '../../../components/ModalMessage';

const CreateUserEmail = ({navigation}) => {
  const [modalMV, setModalMV] = useState({
    Visible: false,
    Message: '',
    type: '',
  });

  const [inputEmail, changeInputEmail] = useState({
    valueEmail: '',
    isValidEmail: '',
    touched: false,
  });

  const [inputPassword, changeInputPassword] = useState({
    valuePassword: '',
    isValidPassword: '',
    touched: false,
  });

  const [inputConfirmPassword, changeInputConfirmPassword] = useState({
    valueConfirmPassword: '',
    isValidConfirmPassword: '',
    touched: false,
  });

  const submitHandler = (types, inputVal) => {
    if (types == 'email') {
      changeInputEmail({
        valueEmail: inputVal,
        touched: true,
        isValidEmail: HandlerEmail(inputVal),
      });
    }
    if (types == 'password') {
      changeInputPassword({
        valuePassword: inputVal,
        touched: true,
        isValidPassword: HandlerPassword(inputVal),
      });
    }

    if (types == 'confirmPassword') {
      changeInputConfirmPassword({
        valueConfirmPassword: inputVal,
        touched: true,
        isValidConfirmPassword: HandlerConfirmPassword(
          inputPassword.valuePassword,
          inputVal,
        ),
      });
    }
  };
  const onPressRegister = () => {
    inputEmail.isValidEmail == true &&
    inputPassword.isValidPassword == true &&
    inputConfirmPassword.isValidConfirmPassword == true
      ? FireSignUp(
          inputEmail.valueEmail,
          inputPassword.valuePassword,
          navigation,
          setModalMV,
        )
      : changeInputEmail({
          valueEmail: inputEmail.valueEmail,
          touched: true,
          isValidEmail: HandlerEmail(inputEmail.valueEmail),
        });
    changeInputPassword({
      valuePassword: inputPassword.valuePassword,
      touched: true,
      isValidPassword: HandlerPassword(inputPassword.valuePassword),
    });
    changeInputConfirmPassword({
      valueConfirmPassword: inputConfirmPassword.valueConfirmPassword,
      touched: true,
      isValidConfirmPassword: HandlerConfirmPassword(
        inputPassword.valuePassword,
        inputConfirmPassword.valueConfirmPassword,
      ),
    });
  };

  const localImage = require('../../../assets/image/imageBackgroundSignUp.png');
  const taitleText = {
    taitle: 'Create\nAccount',
    Arrow: <Icon name="arrow-right-alt" size={scale(45)} color="#ffffff" />,
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#4f5460'} barStyle={'default'} />
      <ImageBackground
        source={localImage}
        resizeMode={'cover'}
        style={styles.imageBackground}>
        <ModalMessage
          modalMV={modalMV}
          setModalMV={setModalMV}
          navigation={navigation}
        />
        <ScrollView style={styles.scrollView}>
          <View>
            <View style={styles.viewInput}>
              <Text style={styles.taitle}>{taitleText.taitle}</Text>
              <TextInput
                placeholder="Email"
                placeholderTextColor={'white'}
                style={styles.input}
                textAlign={'left'}
                textContentType="emailAddress"
                autoComplete="email"
                keyboardType={'email-address'}
                onChangeText={x => {
                  submitHandler('email', x);
                }}
              />

              {inputEmail.touched == true &&
              inputEmail.isValidEmail == false ? (
                <Text style={styles.alertHandler}>
                  Enter a Valid Email Address, Example: user@example.com
                </Text>
              ) : null}

              <TextInput
                placeholder="Password"
                placeholderTextColor={'white'}
                style={styles.input}
                textAlign={'left'}
                textContentType="password"
                secureTextEntry={true}
                autoComplete="password"
                onChangeText={x => {
                  submitHandler('password', x);
                }}
              />

              {inputPassword.touched == true &&
              inputPassword.isValidPassword == false ? (
                <Text style={styles.alertHandler}>
                  Enter a valid password of at least 6 characters
                </Text>
              ) : null}

              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor={'white'}
                style={styles.input}
                textAlign={'left'}
                textContentType="password"
                secureTextEntry={true}
                autoComplete="password"
                onChangeText={x => {
                  submitHandler('confirmPassword', x);
                }}
              />

              {inputConfirmPassword.touched == true &&
              inputConfirmPassword.isValidConfirmPassword == false ? (
                <Text style={styles.alertHandler}>Password does not match</Text>
              ) : null}
            </View>

            <View style={styles.viewicon}>
              <Text style={styles.taitleScreen}>Sign up</Text>
              <TouchableOpacity
                onPress={() => {
                  onPressRegister();
                }}>
                <Text style={styles.iconArrow}>{taitleText.Arrow}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Signin}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={styles.textNav}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default CreateUserEmail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewInput: {
    marginHorizontal: scale(20),
  },
  alertHandler: {
    color: 'red',
    margin: scale(5),
    fontSize: scale(15),
  },
  containers: {},
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  container2: {
    marginHorizontal: scale(20),
  },
  taitle: {
    color: 'white',
    fontSize: scale(42),
    fontFamily: 'Arial',
    marginVertical: scale(30),
  },
  input: {
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    fontSize: scale(20),
    marginVertical: scale(10),
  },
  taitleScreen: {
    color: 'white',
    fontSize: scale(30),
    textAlign: 'left',
  },
  viewicon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: scale(20),
    marginHorizontal: scale(20),
    textAlign: 'left',
  },
  iconArrow: {
    color: 'white',
    borderRadius: scale(50),
    padding: scale(20),
    backgroundColor: '#515662',
  },
  textNav: {
    color: '#feb048',
    fontSize: scale(20),
    textDecorationLine: 'underline',
  },
  scrollView: {},
  Signin: {
    marginHorizontal: scale(20),
    marginBottom: scale(12),
    textAlign: 'left',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});
