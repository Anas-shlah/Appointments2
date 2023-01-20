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

import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {HandlerPassword, HandlerEmail} from '../../../utils/Handlerinput';
import FireLogin from './LoginFirebase';
import ModalMessage from '../../../components/ModalMessage';
const localImage = require('../../../assets/image/test3.png');

const taitleText = {
  taitle: 'Welcome\nBack',
  Arrow: <Icon name="arrow-right-alt" size={scale(45)} color="#ffffff" />,
};

const Login = ({navigation, route}) => {
  const {SetuserInfoContext} = route.params;

  const [modalMV, setModalMV] = useState({
    Visible: false,
    Message: '',
    type: '',
  });
  const [inputEmail, changeInputEmail] = useState({
    valueEmail: '',
    isValidEmail: false,
    touched: false,
  });

  const [inputPassword, changeInputPassword] = useState({
    valuePassword: '',
    isValidPassword: false,
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
  };
  const onPressRegister = () => {
    inputEmail.isValidEmail == true && inputPassword.isValidPassword == true
      ? FireLogin(
          inputEmail.valueEmail,
          inputPassword.valuePassword,
          SetuserInfoContext,
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
  };
  return (
    <View style={styles.wrapper}>
      <StatusBar backgroundColor={'#4b4f5b'} barStyle={'default'} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ImageBackground
          source={localImage}
          resizeMode={'cover'}
          style={styles.imageBackground}>
          <ModalMessage
            modalMV={modalMV}
            setModalMV={setModalMV}
            navigation={navigation}
          />
          <View style={styles.container2}>
            <Text style={styles.taitle}>{taitleText.taitle}</Text>
          </View>
          <View style={styles.viewInput}>
            <TextInput
              placeholder="Email"
              placeholderTextColor={'#515662'}
              underlineColorAndroid={'#515662'}
              style={styles.input}
              textAlign={'left'}
              textContentType={'emailAddress'}
              autoComplete={'email'}
              keyboardType={'email-address'}
              onChangeText={x => {
                submitHandler('email', x);
              }}
              testID={'Login.emailInput'}
            />
            {inputEmail.touched == true && inputEmail.isValidEmail == false ? (
              <Text style={styles.alertHandler}>
                Please enter a valid Email
              </Text>
            ) : null}

            <TextInput
              placeholder="Password"
              placeholderTextColor={'#515662'}
              underlineColorAndroid={'#515662'}
              style={styles.input}
              textAlign={'left'}
              textContentType={'password'}
              secureTextEntry={true}
              autoComplete={'password'}
              onChangeText={x => {
                submitHandler('password', x);
              }}
              testID={'Login.passwordInput'}
            />

            {inputPassword.touched == true &&
            inputPassword.isValidPassword == false ? (
              <Text style={styles.alertHandler}>
                Enter a valid password of at least 6 characters
              </Text>
            ) : null}
          </View>
          <View style={styles.container3}>
            <View style={styles.viewicon}>
              <Text style={styles.taitleScreen}>Sign in</Text>
              <TouchableOpacity
                onPress={() => {
                  onPressRegister();
                }}
                testID={'loginButton'}>
                <Text style={styles.iconArrow}>{taitleText.Arrow}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewicon}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CreateUserEmail');
                }}>
                <Text style={styles.textNav}>Sign up</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.textNav}>Forgot Passwords</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  viewInput: {
    margin: scale(10),
    marginHorizontal: scale(20),
    marginTop: scale(110),
  },
  alertHandler: {
    color: 'red',
    fontSize: scale(15),
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  container2: {
    marginHorizontal: scale(20),
    marginTop: scale(70),
  },
  container3: {
    marginHorizontal: scale(20),
  },
  taitle: {
    color: 'white',
    fontSize: scale(42),
    fontFamily: 'Arial',
    marginVertical: scale(35),
    marginHorizontal: scale(60),
  },
  input: {
    color: '#515662',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    fontSize: scale(20),
    marginVertical: scale(15),
  },
  taitleScreen: {
    color: '#515662',
    fontSize: scale(30),
    textAlign: 'left',
  },
  viewicon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scale(10),
    marginBottom: scale(12),
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
    fontSize: scale(15),
    textDecorationLine: 'underline',
  },
});
