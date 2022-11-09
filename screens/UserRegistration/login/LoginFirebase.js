import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const FireLogin = async (Email, Password, SetuserInfoContext, navigation) => {
  console.log('Email ', Email, 'Password  ', Password);
  auth()
    .signInWithEmailAndPassword(Email, Password)
    .then(async () => {
      console.log('User account created & signed in!'),
        fetchingData(),
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
