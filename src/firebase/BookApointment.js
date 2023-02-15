import firestore from '@react-native-firebase/firestore';
import {SendNotificationBookRequest} from '../Notification/SendNotificationBookRequest';
//ok all file and check
const BookAppointment = async (dataAdmin, dataUser, date) => {
  console.log('faindData');
  await firestore()
    .collection('Reservations')
    .add({
      Acceptable: 'waiting',
      ApplicationDate: firestore.Timestamp.now(),
      bookingStatus: 'bookedUp',
      date: date,
      from: dataAdmin.email,
      nameFrom: dataAdmin.name,
      nameTo: dataUser.name,
      to: dataUser.email,
      tokenFrom: dataAdmin.tokenMessaging,
      tokento: dataUser.tokenMessaging,
    })
    .then(() => {
      console.log('User added Appointment!');

      SendNotificationBookRequest(
        dataUser.tokenMessaging,
        'Request a new appointment',
        'You have a new appointment request from ' + dataAdmin.name,
      );
    });
  return;
};

export default BookAppointment;
