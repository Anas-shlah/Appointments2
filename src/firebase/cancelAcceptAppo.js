import firestore from '@react-native-firebase/firestore';
import {SendNotificationBookRequest} from '../Notification/SendNotificationBookRequest';
import auth from '@react-native-firebase/auth';
// OK and check
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
      tokenFrom: data.tokenFrom,
      tokento: data.tokento,
    })
    .then(() => {
      console.log('cancel Appointments');

      SendNotificationBookRequest(
        auth().currentUser.email == data.from ? data.tokento : data.tokenFrom,
        'Appointment cancellation',
        auth().currentUser.email == data.from
          ? data.nameFrom
          : data.nameTo + ' canceled the appointment',
      );
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
      tokenFrom: data.tokenFrom,
      tokento: data.tokento,
    })
    .then(() => {
      console.log('Accept Appointments');
      SendNotificationBookRequest(
        auth().currentUser.email == data.from ? data.tokento : data.tokenFrom,
        'Accept the appointment',
        auth().currentUser.email == data.from
          ? data.nameFrom
          : data.nameTo + ' agreed to the appointment',
      );
    });
};
