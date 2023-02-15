import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {scale} from 'react-native-size-matters';

import CardsAppo from '../../components/CardsAppo';

import {fetchAppointmentRequestsTo} from '../../firebase/AppointmentRequestsF';
import {UserInfoContext} from '../../Context/UserContext';

const AppointmentRequests = () => {
  const [postsdata, Setpostsdata] = useState();

  const Admin = useContext(UserInfoContext);

  fetchAppointmentRequestsTo(Admin.email, Setpostsdata);

  const renderItem = ({item, index}) => {
    return <CardsAppo data={item} />;
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.viewtitle}>
        <Text style={styles.title}>Appointment Requests</Text>
      </View>
      <FlatList
        data={postsdata}
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
