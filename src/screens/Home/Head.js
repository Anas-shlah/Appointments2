import React, {useContext} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';

const localavatar = require('../../assets/image/useravatar4.png');
const localavatar2 = require('../../assets/image/useravatar.png');

import {UserInfoContext} from '../../Context/UserContext';

const Head = ({navigation}) => {
  const User = useContext(UserInfoContext);

  return (
    <View style={styles.wrapper}>
      <View style={styles.head}>
        <Icon
          name="settings"
          size={scale(30)}
          color="#fff"
          style={styles.imagesettings}
          onPress={() => navigation.navigate('settings')}
        />
        <View style={{alignItems: 'center'}}>
          <Text style={styles.name}>{User.name}</Text>
          <View style={styles.locationview}>
            <Icon
              name="person-pin-circle"
              size={scale(25)}
              color="#c0c0c0c0"
              style={styles.iconLocation}
            />
            <Text style={styles.location}>
              {User.country} - {User.capital}
            </Text>
          </View>
        </View>
        <Image
          source={localavatar}
          defaultSource={localavatar2}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default Head;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#0f64f4',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    color: 'white',
    fontSize: scale(20),
  },
  locationview: {
    flexDirection: 'row',
  },
  iconLocation: {},
  location: {
    color: '#c0c0c0',
    fontSize: scale(15),
  },
  image: {
    width: scale(40),
    height: scale(40),
    margin: scale(5),
    borderRadius: scale(20),
  },
  imagesettings: {
    margin: scale(5),
    marginTop: scale(8),
  },
});
