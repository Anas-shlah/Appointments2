import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {scale} from 'react-native-size-matters';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomTextInput from '../../../components/Inputs/TextInput/CustomTextInput';
import CustomSwitch from '../../../components/Inputs/CustomSwitch/CustomSwitch';
import CustomButtonNext from '../../../components/Buttons/CustomButtonNext';
import TextErrorMessage from '../../../components/TextErrorMessage/TextErrorMessage';

import {HandlerLength, HandlerUserName} from '../../../utils/Handlerinput';
import {errorMessage} from '../../../utils/errorMessage';
import {createProfileUser} from '../../../firebase/createProfileUser';
import {getUserData} from '../../../firebase/GetinfoUser';

const initialInputValue = {
  value: '',
  isValid: false,
  touched: false,
};

const Body = props => {
  const [getData, setGetData] = useState(false);
  getUserData(setGetData);
  const [switchv, setSwitchv] = useState(false);
  const [inputName, setInputName] = useState(initialInputValue);
  const [inputPhone, setInputPhone] = useState(initialInputValue);
  const [inputCountry, setInputCountry] = useState(initialInputValue);
  const [inputCapital, setInputCapital] = useState(initialInputValue);
  const [inputDepartment, setInputDepartment] = useState(initialInputValue);
  const [inputBio, setInputBio] = useState(initialInputValue);
  useEffect(() => {
    if (getData) {
      setInputName({
        value: getData.name,
        isValid: true,
        touched: true,
      });
      setInputPhone({
        value: getData.phone,
        isValid: true,
        touched: true,
      });
      setInputCountry({
        value: getData.country,
        isValid: true,
        touched: true,
      });
      setInputCapital({
        value: getData.capital,
        isValid: true,
        touched: true,
      });
      getData.businessAccount
        ? (setSwitchv(true),
          setInputDepartment({
            value: getData.department,
            isValid: true,
            touched: true,
          }),
          setInputBio({
            value: getData.bio,
            isValid: true,
            touched: true,
          }))
        : null;
    }
  }, [getData]);
  const touchAll = () => {
    setInputName({
      value: inputName.value,
      isValid: inputName.isValid,
      touched: true,
    });
    setInputPhone({
      value: inputPhone.value,
      isValid: inputPhone.isValid,
      touched: true,
    });
    setInputCountry({
      value: inputCountry.value,
      isValid: inputCountry.isValid,
      touched: true,
    });
    setInputCapital({
      value: inputCapital.value,
      isValid: inputCapital.isValid,
      touched: true,
    });
    switchv
      ? (setInputDepartment({
          value: inputDepartment.value,
          isValid: inputDepartment.isValid,
          touched: true,
        }),
        setInputBio({
          value: inputBio.value,
          isValid: inputBio.isValid,
          touched: true,
        }))
      : null;
  };
  const saveInfo = () => {
    touchAll();
    if (
      inputName.isValid &&
      inputPhone.isValid &&
      inputCountry.isValid &&
      inputCapital.isValid == true
    ) {
      if (
        switchv == true &&
        inputDepartment.isValid &&
        inputBio.isValid == true
      ) {
        ToFirebase();
      } else {
        if (switchv == false) {
          setInputDepartment(initialInputValue), setInputBio(initialInputValue);
          ToFirebase();
        }
      }
    }
  };
  const ToFirebase = async () => {
    let tokenMessaging = await AsyncStorage.getItem('fcmtoken');
    const opjData = {
      name: inputName.value,
      phone: inputPhone.value,
      country: inputCountry.value,
      capital: inputCapital.value,
      department: inputDepartment.value,
      bio: inputBio.value,
      businessAccount: switchv,
      email: auth().currentUser.email,
      tokenMessaging: tokenMessaging,
    };
    createProfileUser(opjData).then(() => {
      props.navigation.replace('Home');
    });
  };
  return (
    <View style={styles.container}>
      <CustomTextInput
        title={'Name'}
        placeholder={'Enter your name'}
        value={inputName.value}
        onChangeText={v =>
          setInputName({
            value: v.trimStart(),
            isValid: HandlerLength(v, 2),
            touched: true,
          })
        }
      />
      {inputName.touched == true && inputName.isValid == false ? (
        <TextErrorMessage text={errorMessage.errorLength(2)} />
      ) : null}
      <CustomTextInput
        title={'E-mail'}
        type={'email-address'}
        placeholder={'Enter your e-mail'}
        value={auth().currentUser.email}
        disabled
      />
      <CustomTextInput
        title={'Phone'}
        type={'phone-pad'}
        placeholder={'Enter your Phone'}
        value={inputPhone.value}
        onChangeText={v =>
          setInputPhone({
            value: v.trimStart(),
            isValid: HandlerLength(v, 7),
            touched: true,
          })
        }
      />
      {inputPhone.touched == true && inputPhone.isValid == false ? (
        <TextErrorMessage text={errorMessage.errorPhone} />
      ) : null}

      <CustomTextInput
        title={'Country'}
        placeholder={'Example: Germany'}
        value={inputCountry.value}
        onChangeText={v =>
          setInputCountry({
            value: v.trimStart(),
            isValid: HandlerLength(v, 3),
            touched: true,
          })
        }
      />
      {inputCountry.touched == true && inputCountry.isValid == false ? (
        <TextErrorMessage text={errorMessage.errorLength(3)} />
      ) : null}

      <CustomTextInput
        title={'Capital'}
        placeholder={'Example: Luxembourg'}
        value={inputCapital.value}
        onChangeText={v =>
          setInputCapital({
            value: v.trimStart(),
            isValid: HandlerLength(v, 3),
            touched: true,
          })
        }
      />
      {inputCapital.touched == true && inputCapital.isValid == false ? (
        <TextErrorMessage text={errorMessage.errorLength(3)} />
      ) : null}

      {switchv ? (
        <>
          <CustomTextInput
            title={'department'}
            placeholder={'Example: Medical'}
            value={inputDepartment.value}
            onChangeText={v =>
              setInputDepartment({
                value: v.trimStart(),
                isValid: HandlerLength(v, 3),
                touched: true,
              })
            }
          />
          {inputDepartment.touched == true &&
          inputDepartment.isValid == false ? (
            <TextErrorMessage text={errorMessage.errorLength(2)} />
          ) : null}
          <CustomTextInput
            title={'bio'}
            placeholder={'Example: American Board Certified Prosthodontist'}
            multiline={true}
            value={inputBio.value}
            onChangeText={v =>
              setInputBio({
                value: v.trimStart(),
                isValid: HandlerLength(v, 3),
                touched: true,
              })
            }
          />
          {inputBio.touched == true && inputBio.isValid == false ? (
            <TextErrorMessage text={errorMessage.errorLength(5)} />
          ) : null}
        </>
      ) : null}
      <CustomSwitch
        title={'Business Account'}
        value={switchv}
        setValue={setSwitchv}
        Note={
          'If you activate this option (Business Account), your account and information will appear to others, and they can also book an appointment with you.\nYou can modify this option later.'
        }
      />
      <CustomButtonNext onPress={saveInfo} />
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: scale(10),
    margin: scale(20),
  },
});
