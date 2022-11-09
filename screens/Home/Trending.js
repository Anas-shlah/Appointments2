import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import firestore from '@react-native-firebase/firestore';
import Cardspersonal from '../../src/component/Cardspersonal';
import {scale} from 'react-native-size-matters';

/*firestore()
  .collection('UserAccount')
  .limit(4)
  .get()
  .then(documenrSnapshot => {
    console.log(documenrSnapshot);
  });
*/
const arry = [];

firestore()
  .collection('UserAccount')
  .where('businessAccount', '==', true)
  .limit(7)
  .onSnapshot(async querySnapshot => {
    querySnapshot.docChanges().forEach(i => arry.push(i.doc.data()));
  });

const Trending = () => {
  const renderItem = ({item, index}) => {
    return <Cardspersonal data={item} />;
  };
  return (
    <View>
      <FlatList
        data={arry}
        renderItem={renderItem}
        horizontal={true}
        ListEmptyComponent={
          <Text style={styles.altText}>
            Sorry, For some reason there is no data to display Try to make sure
            you are connected to the Internet or contact support
          </Text>
        }
      />
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
  altText: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: scale(8),
    borderRadius: 20,
    padding: scale(10),
    backgroundColor: '#aae08f',
    color: '#ffffff',
    fontSize: scale(13),
  },
});
