import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {scale} from 'react-native-size-matters';
import CardsAppo from '../../src/component/CardsAppo';

import {fetchAppointmentRequestsTo} from '../../firebase/AppointmentRequestsF';
import {UserInfoContext} from '../../Context/UserContext';

const {width, height} = Dimensions.get('screen');

const AppointmentRequests = () => {
  const [arrydata, Setarrydata] = useState();
  const [postsTo, SetPostsTo] = useState([]);

  const Admin = useContext(UserInfoContext);

  useEffect(() => {
    const arry = [];
    arry.push(...postsTo);
    Setarrydata(
      arry.sort(function (a, b) {
        return a.date - b.date;
      }),
    );
  }, [postsTo]);

  getPosts();
  function getPosts() {
    fetchAppointmentRequestsTo(Admin.email, SetPostsTo);
  }
  // console.log('postsTo', postsFromTo);

  const renderItem = ({item, index}) => {
    return <CardsAppo data={item} />;
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.viewtitle}>
        <Text style={styles.title}>Appointment Requests</Text>
      </View>
      <FlatList
        data={arrydata}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal={true}
        ListEmptyComponent={
          <Text style={styles.altText}>
            There are no appointments requests to display
          </Text>
        }
      />
    </View>
  );
};

export default AppointmentRequests;

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

/*
AppointmentRequests
*/
