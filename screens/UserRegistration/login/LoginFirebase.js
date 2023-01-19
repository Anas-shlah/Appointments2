import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const FireLogin = async (
  Email,
  Password,
  SetuserInfoContext,
  navigation,
  setModalMV,
) => {
  console.log('Email ', Email, 'Password  ', Password);
  auth()
    .signInWithEmailAndPassword(Email, Password)
    .then(async () => {
      console.log('User account  & signed in!'),
        navigation.replace('Reception');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        setModalMV({
          Visible: true,
          Message: 'That email address is invalid!',
          type: 'error',
        });
      }

      if (error.code === 'auth/wrong-password') {
        console.log('The password is invalid.');
        setModalMV({
          Visible: true,
          Message: 'The password is invalid.',
          type: 'error',
        });
      }

      if (error.code === 'auth/user-not-found') {
        console.log(
          'There is no user record corresponding to this identifier. The user may have been deleted.',
        );
        setModalMV({
          Visible: true,
          Message:
            'There is no account with this name. Make sure you entered the email correctly.',
          type: 'error',
        });
      }

      console.error(error);
    });

  const fetchingData = async () => {
    await firestore()
      .collection('UserAccount')
      .where('email', '==', Email)
      .get()
      .then(a => {
        SetuserInfoContext(a.docs[0].data());
      });
    //SetuserInfoContext(users.docs[0].data());
    /*
    firestore()
      .collection('UserAccount')
      .where('email', '==', 'anis.sh93@gmail.com')
      .onSnapshot(async querySnapshot => {
        SetuserInfoContext(querySnapshot.docChanges()[0].doc.data());
      });



      firestore()
  .collection('UserAccount')
  .doc('anis.sh93@gmail.com')
  .onSnapshot(a => {
    console.log(a.data());
  });
  
      */
    //SetuserInfoContext(users);
    //console.log(us);
    //querySnapshot.docChanges()[0].doc.data()
  };
};

export default FireLogin;
