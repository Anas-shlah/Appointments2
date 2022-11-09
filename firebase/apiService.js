import firestore from '@react-native-firebase/firestore';

const fetchAppoNext = async SetPosts => {
  var posts = [];
  const querySnapshot = await firestore()
    .collection('Reservations')
    .where('from', '==', 'anis.sh93@gmail.com')
    .where('Acceptable', '==', 'waiting')
    .where('bookingStatus', '==', 'bookedUp')
    .orderBy('date', 'asc')
    .limit(5)
    .onSnapshot(async (documentSnapshot, onError) => {
      posts.length = documentSnapshot.size;
      await documentSnapshot.docs.forEach((doc, i) => {
        let postData = doc.data();
        postData.id = doc.id;
        posts[i] = postData;
      });
      SetPosts(posts);
    });
};
export default fetchAppoNext;

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
      console.log('cancel Appointments');
    });
};

/***
 * 
 * 
 * 
const fetchAppoNext = async () => {
  const posts = new Array();
  const querySnapshot = await firestore()
    .collection('Reservations')
    .where('from', '==', 'anis.sh93@gmail.com')
    .where('Acceptable', '==', 'waiting')
    .where('bookingStatus', '==', 'bookedUp')
    .orderBy('date', 'asc')
    .limit(5)
    .get();
  querySnapshot.forEach(doc => {
    let postData = doc.data();
    postData.postId = doc.id;
    posts.push(postData);
  });
  return {posts};
};
export default fetchAppoNext;
 

 * 
 */
