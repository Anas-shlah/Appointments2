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

export const fetchAppoNextToAFrom = async (email, SetPostsFromTo) => {
  var post1;
  var post2;
  const all = [];
  const save1 = a => {
    post1 = a;
    up();
    console.log('save1 1111111111111111111111111111111111', a);
  };
  const save2 = a => {
    post2 = a;
    up();
    console.log('save2 2222222222222222222222222222222222', a);
  };
  fetchAppoNextFrom(email, save1);
  fetchAppoNextTo(email, save2);
  const up = () => {
    all.length = 0;
    all.push(...post1);
    all.push(...post2);
    // all.pop(undefined);
    var sortall = all.sort(function (a, b) {
      return a.date - b.date;
    });
    //
    var update = false;
    if (sortall.length == oldDataAll.length) {
      sortall.map((element, index) => {
        if (element.id != oldDataAll[index].id) {
          update = true;
        }
      });
    } else {
      update = true;
    }
    if (update == true) {
      SetPostsFromTo(sortall);
      oldDataAll = sortall;
      console.log('updateeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
    }

    // oldDataAll = isUpdate(sortall, oldDataAll, SetPostsFromTo);
  };
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
