import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import Cardspersonal from '../../src/component/Cardspersonal';
import {scale} from 'react-native-size-matters';
import {fetchPersons} from '../../firebase/Trending';

import {UserInfoContext} from '../../Context/UserContext';

const Trending = props => {
  const {navigation} = props;
  // const Persons = [];
  const [Personsarry, SetPersonsarry] = useState();
  const User = useContext(UserInfoContext);

  fetchPersons(User, SetPersonsarry);
  console.log('set data');

  const renderItem = ({item, index}) => {
    return <Cardspersonal data={item} navigation={navigation} />;
  };
  return (
    <View>
      <FlatList
        data={Personsarry}
        renderItem={renderItem}
        horizontal={true}
        ListEmptyComponent={
          <Text style={styles.altText}>
            Sorry, for some reason there is no data to display, try to make sure
            you are connected to the internet or contact support
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
