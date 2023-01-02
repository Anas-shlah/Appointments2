import firestore from '@react-native-firebase/firestore';

var oldData2 = [];

export const fetchAppointmentRequestsTo = async (email, SetPostsTo) => {
  var posts = [];
  const querySnapshot2 = await firestore()
    .collection('Reservations')
    .where('to', '==', email)
    .where('Acceptable', '==', 'waiting')
    .where('bookingStatus', '==', 'bookedUp')
    .orderBy('date', 'asc')
    .onSnapshot(
      async (documentSnapshot, onError) => {
        posts.length = documentSnapshot.size;
        await documentSnapshot.docs.forEach((doc, i) => {
          let postData = doc.data();
          postData.id = doc.id;
          posts[i] = postData;
        });
        var update = false;
        if (posts.length == oldData2.length) {
          posts.map((element, index) => {
            if (element.id != oldData2[index].id) {
              update = true;
            }
          });
        } else {
          update = true;
        }
        if (update == true) {
          oldData2 = posts;
          // console.log('updateeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
        }
        if (update == true) {
          SetPostsTo(posts);
        }
        // oldData2 = isUpdate(posts, oldData2, SetPostsTo);
      },
      error => {
        console.log('im fetchAppoNextTo error ', error);
      },
    );
};
/*
// export default fetchAppoNext;
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
      nameTo: data.nameTo,
      to: data.to,
      dateCancel: firestore.Timestamp.now(),
    })
    .then(() => {
      //fetchAppoNext(SetData);
      console.log('cancel Appointments');
    });
};
*/
