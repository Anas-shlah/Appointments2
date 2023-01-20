import {
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  HandlerUserName,
  HandlerPassword,
  HandlerEmail,
  AlertHandler,
} from '../../../src/utils/Handlerinput';
import {scale} from 'react-native-size-matters';

import {ImageBackground} from 'react-native';
import FireSignUp from './SignUpFirebase';
const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
const SignUp = ({navigation, route}) => {
  // const {setuser} = route.params;

  const [inputName, changeInputName] = useState({
    valueUserName: '',
    isValidUserName: '',
    touched: false,
  });
  const [inputEmail, changeInputEmail] = useState({
    valueEmail: '',
    isValidEmail: '',
    touched: false,
  });

  const [inputPhone, changeInputPhone] = useState({
    valuePhone: '',
    isValidPhone: '',
    touched: false,
  });

  const [inputPassword, changeInputPassword] = useState({
    valuePassword: '',
    isValidPassword: '',
    touched: false,
  });

  const submitHandler = (types, inputVal) => {
    if (types == 'username') {
      changeInputName({
        valueUserName: inputVal,
        touched: true,
        isValidUserName: HandlerUserName(inputVal),
      });
    }
    if (types == 'email') {
      changeInputEmail({
        valueEmail: inputVal,
        touched: true,
        isValidEmail: HandlerEmail(inputVal),
      });
    }
    if (types == 'Phone') {
      changeInputPhone({
        valuePhone: inputVal,
        touched: true,
        isValidEmail: true,
      });
    }
    if (types == 'password') {
      changeInputPassword({
        valuePassword: inputVal,
        touched: true,
        isValidPassword: HandlerPassword(inputVal),
      });
    }
  };
  const onPressRegister = () => {
    inputName.isValidUserName == true &&
    inputEmail.isValidEmail == true &&
    inputPassword.isValidPassword == true
      ? FireSignUp(
          inputEmail.valueEmail,
          inputPassword.valuePassword,
          navigation,
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
    changeInputName({
      valueUserName: inputName.valueUserName,
      touched: true,
      isValidUserName: HandlerUserName(inputName.valueUserName),
    });
  };
  const localImage = require('../../../image/imageBackgroundSignUp.png');
  const taitleText = {
    taitle: 'Create\nAccount',
    Arrow: <Icon name="arrow-right-alt" size={scale(45)} color="#ffffff" />,
  };
  return (
    <View>
      <StatusBar backgroundColor={'#4f5460'} barStyle={'default'} />
      <ImageBackground
        source={localImage}
        resizeMode={'cover'}
        style={styles.imageBackground}>
        <ScrollView style={styles.scrollView}>
          <View>
            <View style={styles.viewInput}>
              <Text style={styles.taitle}>{taitleText.taitle}</Text>
              <TextInput
                placeholder="Name"
                placeholderTextColor={'white'}
                style={styles.input}
                textAlign={'left'}
                textContentType="name"
                autoComplete="name"
                onChangeText={x => {
                  submitHandler('username', x);
                }}
              />

              {inputName.touched == true &&
              inputName.isValidUserName == false ? (
                <Text style={styles.alertHandler}>
                  Enter your username with at least 6 characters and only
                  letters and numbers are accepted
                </Text>
              ) : null}

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
                placeholder="Phone"
                placeholderTextColor={'white'}
                style={styles.input}
                textAlign={'left'}
                textContentType="telephoneNumber"
                autoComplete="tel"
                keyboardType={'phone-pad'}
                onChangeText={x => {
                  submitHandler('Phone', x);
                }}
              />

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

export default SignUp;

const styles = StyleSheet.create({
  viewInput: {
    marginHorizontal: scale(20),
  },
  alertHandler: {
    color: 'red',
    margin: scale(5),
    fontSize: scale(15),
  },
  containers: {
    // flex: 1,
    // backgroundColor: '#ffffff',
  },
  imageBackground: {
    // width: width,
    //height: height,
    //marginTop:scale(-10)
    // flex: 1,
  },
  container2: {
    /** */ marginHorizontal: scale(20),
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
    // fontSize: scale(25),
    borderRadius: scale(50),
    padding: scale(20),
    backgroundColor: '#515662',
  },
  textNav: {
    color: '#feb048',
    fontSize: scale(20),
    textDecorationLine: 'underline',
  },
  scrollView: {
    // flex: 1,
    // marginBottom: scale(50),
    // backgroundColor:'white'
  },
  Signin: {
    marginHorizontal: scale(20),
    marginBottom: scale(12),
    textAlign: 'left',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});
