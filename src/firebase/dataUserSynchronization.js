import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

export function getUserData(SetuserInfoContext, setNavigationTo) {
  auth().onAuthStateChanged(isuserLogin => {
    if (isuserLogin) {
      auth().currentUser.reload();
      const userID = auth().currentUser.email;
      firestore()
        .collection('UserAccount')
        .doc(userID)
        .onSnapshot(onResult, onError);
    } else {
      onError('no Login');
      setNavigationTo('Login');
    }
  });

  async function onResult(QuerySnapshot) {
    if (QuerySnapshot.exists) {
      const data = QuerySnapshot._data;
      data.tokenMessaging = await AsyncStorage.getItem('fcmtoken');
      createProfileUser(data);
      SetuserInfoContext(data);
      console.log('get data don');
      setNavigationTo('Home');
    } else {
      onError('no exists user');
      setNavigationTo('Login');
    }
  }

  const createProfileUser = opjData =>
    firestore()
      .collection('UserAccount')
      .doc(auth().currentUser.email)
      .set(opjData)
      .then(() => {
        console.log('User added! ', opjData);
      });

  function onError(error) {
    console.error(error);
  }
  return;
}

export default getUserData;
