import firestore from '@react-native-firebase/firestore';

export const cancelAppo = async data => {
  firestore()
    .collection('Reservations')
    .doc(data.id)
    .update({
      Acceptable: data.Acceptable,
      ApplicationDate: data.ApplicationDate,
      bookingStatus: 'cancel',
      date: data.date,
      from: data.from,
      nameFrom: data.nameFrom,
      nameTo: data.nameTo,
      to: data.to,
      dateCancel: firestore.Timestamp.now(),
    })
    .then(() => {
      //fetchAppoNext(SetData);
      console.log('cancel Appointments');
    });
};

export const AcceptAppo = async data => {
  firestore()
    .collection('Reservations')
    .doc(data.id)
    .update({
      Acceptable: 'accept',
      ApplicationDate: data.ApplicationDate,
      bookingStatus: data.bookingStatus,
      date: data.date,
      from: data.from,
      nameFrom: data.nameFrom,
      nameTo: data.nameTo,
      to: data.to,
      dateAccept: firestore.Timestamp.now(),
    })
    .then(() => {
      //fetchAppoNext(SetData);
      console.log('Accept Appointments');
    });
};
