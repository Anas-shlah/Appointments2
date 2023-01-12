import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const createProfileUser = opjData =>
  firestore()
    .collection('Users')
    .doc(auth().currentUser.email)
    .set(opjData)
    .then(() => {
      console.log('User added!');
      auth().currentUser.updateProfile({displayName: opjData.name});
    });
