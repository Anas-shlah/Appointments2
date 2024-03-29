import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {scale} from 'react-native-size-matters';
import CardsAppo from '../../components/CardsAppo';
import {
  fetchAppoNextFrom,
  fetchAppoNextFromTO,
  fetchAppoNextTo,
} from '../../firebase/fetchAppoNext';
import {UserInfoContext} from '../../Context/UserContext';

const Body = () => {
  const [arrydata, Setarrydata] = useState();
  const [postsFrom, SetPostsFrom] = useState([]);
  const [postsTo, SetPostsTo] = useState([]);

  const User = useContext(UserInfoContext);

  useEffect(() => {
    const arry = [];
    arry.push(...postsTo);
    arry.push(...postsFrom);

    Setarrydata(
      arry.sort(function (a, b) {
        return a.date - b.date;
      }),
    );
  }, [postsFrom, postsTo]);

  fetchAppoNextFromTO(User.email, 'from', SetPostsFrom);
  fetchAppoNextFromTO(User.email, 'to', SetPostsFrom);

  const renderItem = ({item, index}) => {
    return <CardsAppo data={item} />;
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.viewtitle}>
        <Text style={styles.title}>The Next Appointment</Text>
      </View>
      <FlatList
        data={arrydata}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal={true}
        ListEmptyComponent={
          <Text style={styles.altText}>
            There are no upcoming Appointments to display
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
    borderRadius: scale(20),
    padding: scale(10),
    backgroundColor: '#aae08f',
    color: '#ffffff',
    fontSize: scale(13),
  },
  viewtitle: {
    marginHorizontal: scale(22),
  },
});
