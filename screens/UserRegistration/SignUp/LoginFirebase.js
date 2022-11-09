import auth from '@react-native-firebase/auth';

const FireLogin = (Email, Password, navigation) => {
  console.log('Email ', Email, 'Password  ', Password);
  auth()
    .createUserWithEmailAndPassword(Email, Password)
    .then(() => {
      console.log('User account created & signed in!'),
        navigation.navigate('Reservation');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};

export default FireLogin;
