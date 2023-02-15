import firestore from '@react-native-firebase/firestore';
import React, {useEffect} from 'react';
// ok and check
export const fetchAppointment = async (email, type, setposts) => {
  useEffect(() => {
    const subscriber = firestore()
      .collection('Reservations')
      .where(type, '==', email)
      .where('Acceptable', '!=', 'cancle')
      .where('bookingStatus', '==', 'bookedUp')
      .onSnapshot(querySnapshot => {
        const posts = [];
        querySnapshot.forEach(documentSnapshot => {
          posts.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setposts(posts);
      });
    return () => subscriber();
  }, []);
};
