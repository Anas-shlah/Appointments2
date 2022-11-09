import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import CardsAppo from '../../src/component/CardsAppo';
import firestore from '@react-native-firebase/firestore';
import {useState} from 'react';
import {useEffect} from 'react';
import findNextAppo from '../../firebase/firebase-config';
import fetchAppoNext from '../../firebase/apiService';

const {width, height} = Dimensions.get('screen');
const renderItem = ({item, index}) => {
  return <CardsAppo data={item} />;
};
const Body = () => {
  const [arrydata, Setarrydata] = useState();
  const [posts, SetPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    await fetchAppoNext(SetPosts);
    // SetPosts(postsData.posts);
    /*
    const postsData = await fetchAppoNext();
    SetPosts(postsData.posts);*/
    // console.log('postsData== ', postsData.posts);
  }
  // fetchAppoNext(SetPosts);

  return (
    <View style={styles.wrapper}>
      <View style={styles.viewtitle}>
        <Text style={styles.title}>The Next Appointment</Text>
      </View>
      <FlatList
        data={posts}
        renderItem={renderItem}
        horizontal={true}
        ListEmptyComponent={
          <Text style={styles.altText}>
            There are no upcoming Appointments to display
            <ActivityIndicator size={'small'} />
          </Text>
        }
      />
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: scale(5),
  },
  title: {
    color: '#000000',
    fontSize: scale(20),
  },
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
  viewtitle: {
    marginHorizontal: scale(22),
  },
});
