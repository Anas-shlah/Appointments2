import firestore from '@react-native-firebase/firestore';

var oldData2 = [];

export const fetchPersons = (User, SetPersonsarry) => {
  var posts = [];
  firestore()
    .collection('UserAccount')
    .where('businessAccount', '==', true)
    .where('email', '!=', User.email)
    .limit(7)
    .onSnapshot(
      async querySnapshot => {
        querySnapshot.docChanges().forEach(i => posts.push(i.doc.data()));
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
          SetPersonsarry(posts);
        }
      },
      error => {
        console.log('im Trending error ', error);
      },
    );
};
