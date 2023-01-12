import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';

const FireSignUp = (Email, Password, navigation, setModalMV) => {
  var user = auth().currentUser;

  auth()
    .createUserWithEmailAndPassword(Email, Password)
    .then(async result => {
      await user.sendEmailVerification();
      setModalMV({
        Visible: true,
        Message:
          "Email verification link has been sent\nPlease check your email and confirm the mail, then come back to us and log in\nwe're waiting for you",
        type: 'verification',
      });
      console.log('Verification Email Sent');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        auth()
          .signInWithEmailAndPassword(Email, Password)
          .then(async () => {
            console.log('User account  & signed in!'),
              navigation.replace('Reception');
          })
          .catch(error => {
            console.error(error);

            auth().signOut();

            setModalMV({
              Visible: true,
              Message:
                'The account already exists, verify the password and email, then log back in',
              type: 'Login',
            });
          });
      }

      if (error.code === 'auth/invalid-email') {
        setModalMV({Message: 'That email address is invalid!', Visible: true});
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};

export default FireSignUp;
