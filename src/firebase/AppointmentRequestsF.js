import firestore from '@react-native-firebase/firestore';
import React, {useEffect} from 'react';
// OK and check
export const fetchAppointmentRequestsTo = async (email, setposts) => {
  useEffect(() => {
    const subscriber = firestore()
      .collection('Reservations')
      .where('to', '==', email)
      .where('Acceptable', '==', 'waiting')
      .where('bookingStatus', '==', 'bookedUp')
      .orderBy('date', 'asc')
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

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);
};
