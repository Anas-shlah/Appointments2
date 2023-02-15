import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';

import {scale} from 'react-native-size-matters';

import {fetchPersons} from '../../firebase/Trending';
import Cardspersonal from '../../components/Cardspersonal';
import {UserInfoContext} from '../../Context/UserContext';

const Trending = props => {
  const {navigation} = props;
  const [Users, setUsers] = useState();
  const User = useContext(UserInfoContext);

  fetchPersons(User, setUsers);

  const renderItem = ({item, index}) => {
    return <Cardspersonal data={item} navigation={navigation} />;
  };
  return (
    <View>
      <FlatList
        data={Users}
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
