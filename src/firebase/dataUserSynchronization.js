import firestore from '@react-native-firebase/firestore';
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

  function onResult(QuerySnapshot) {
    if (QuerySnapshot.exists) {
      const data = QuerySnapshot._data;
      SetuserInfoContext(data);
      console.log('get data don');
      setNavigationTo('Home');
    } else {
      onError('no exists user');
      setNavigationTo('Login');
    }
  }

  function onError(error) {
    console.error(error);
  }
  return;
}

export default getUserData;
