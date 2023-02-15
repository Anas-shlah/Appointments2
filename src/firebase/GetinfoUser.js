import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import React, {useEffect} from 'react';

export function getUserData(setdata) {
  useEffect(() => {
    auth().currentUser.reload();
    const userID = auth().currentUser.email;
    firestore().collection('UserAccount').doc(userID).onSnapshot(onResult);

    async function onResult(QuerySnapshot) {
      if (QuerySnapshot.exists) {
        const data = QuerySnapshot._data;
        console.log('get data don');
        setdata(data);
      }
    }
    return;
  }, []);
  return;
}
