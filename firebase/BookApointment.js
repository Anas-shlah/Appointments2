import firestore from '@react-native-firebase/firestore';

const BookAppointment = async (dataAdmin, dataUser, date) => {
  console.log('faindData');
  const arry = [];
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
    })
    .then(() => {
      console.log('User added!');
    });
};

export default BookAppointment;
