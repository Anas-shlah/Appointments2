import firestore from '@react-native-firebase/firestore';

const findNextAppo = async Setdata => {
  console.log('faindData');
  const arry = [];
  await firestore()
    .collection('Reservations')
    .where('from', '==', 'anis.sh93@gmail.com')
    .where('Acceptable', '==', 'waiting')
    .where('bookingStatus', '==', 'bookedUp')
    .orderBy('date', 'asc')
    .limit(5)
    .get()
    .then(async querySnapshot => {
      console.log('querySnapshot :  ', querySnapshot);
    });

  // Setdata(arry);

  /*
  var data = [];
  await firestore()
    .collection('UserِAccount')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        const ia = documentSnapshot.id;
        const d = documentSnapshot.data();
        data.push({ data: d});
      }),
        console.log(data);
    });
    */
};

export default findNextAppo;
