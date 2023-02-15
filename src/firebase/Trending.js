import firestore from '@react-native-firebase/firestore';
// useing
//and check done
import React, {useEffect} from 'react';
export const fetchPersons = (User, setUsers) => {
  useEffect(() => {
    const subscriber = firestore()
      .collection('UserAccount')
      .where('businessAccount', '==', true)
      .where('email', '!=', User.email)
      .onSnapshot(querySnapshot => {
        const users = [];
        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setUsers(users);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);
};
