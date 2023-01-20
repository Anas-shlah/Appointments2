import firestore from '@react-native-firebase/firestore';

var oldData1 = [];
var oldData2 = [];
var oldDataAll = [];
export const fetchAppoNextFrom = async (email, SetPosts) => {
  var posts = [];
  const querySnapshot = await firestore()
    .collection('Reservations')
    .where('from', '==', email)
    .where('Acceptable', '==', 'accept')
    .where('bookingStatus', '==', 'bookedUp')
    .orderBy('date', 'asc')
    .limit(5)
    .onSnapshot(
      async (documentSnapshot, onError) => {
        posts.length = documentSnapshot.size;
        await documentSnapshot.docs.forEach((doc, i) => {
          let postData = doc.data();
          postData.id = doc.id;
          posts[i] = postData;
        });

        var update = false;
        if (posts.length == oldData1.length) {
          posts.map((element, index) => {
            if (element.id != oldData1[index].id) {
              update = true;
            }
          });
        } else {
          update = true;
        }
        if (update == true) {
          oldData1 = posts;
          // console.log('updateeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
        }
        if (update == true) SetPosts(posts);

        // isUpdate(posts, oldData1, SetPosts);
        // SetPosts = isUpdate(posts, oldData1, SetPosts);
      },
      error => {
        console.log('im fetchAppoNext error', error);
      },
    );
};

export const fetchAppoNextTo = async (email, SetPostsTo) => {
  var posts = [];
  const querySnapshot2 = await firestore()
    .collection('Reservations')
    .where('to', '==', email)
    .where('Acceptable', '==', 'accept')
    .where('bookingStatus', '==', 'bookedUp')
    .orderBy('date', 'asc')
    .limit(5)
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
        if (update == true) SetPostsTo(posts);
        // oldData2 = isUpdate(posts, oldData2, SetPostsTo);
      },
      error => {
        console.log('im fetchAppoNextTo error ', error);
      },
    );
};
