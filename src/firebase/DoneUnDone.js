import firestore from '@react-native-firebase/firestore';
// OK and check
export const UnDonefire = async data => {
  firestore()
    .collection('Reservations')
    .doc(data.id)
    .update({
      Acceptable: data.Acceptable,
      ApplicationDate: data.ApplicationDate,
      bookingStatus: 'UnDone',
      date: data.date,
      from: data.from,
      nameFrom: data.nameFrom,
      nameTo: data.nameTo,
      to: data.to,
      dateAccept: data.dateAccept,
      dateUnDone: firestore.Timestamp.now(),
      tokenFrom: data.tokenFrom,
      tokento: data.tokento,
    })
    .then(() => {
      console.log('UnDone Appointment');
    });
};

export const Donefire = async data => {
  firestore()
    .collection('Reservations')
    .doc(data.id)
    .update({
      Acceptable: data.Acceptable,
      ApplicationDate: data.ApplicationDate,
      bookingStatus: 'Done',
      date: data.date,
      from: data.from,
      nameFrom: data.nameFrom,
      nameTo: data.nameTo,
      to: data.to,
      dateAccept: data.dateAccept,
      dateDone: firestore.Timestamp.now(),
      tokenFrom: data.tokenFrom,
      tokento: data.tokento,
      tokenFrom: data.tokenFrom,
      tokento: data.tokento,
    })
    .then(() => {
      console.log('Done Appointments');
    });
};
