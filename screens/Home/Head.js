import React, {useContext} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';

const iconLocation = require('../../image/location.png');
const settings = require('../../image/settings.png');
const localavatar = require('../../image/useravatar4.png');
const localavatar2 = require('../../image/useravatar.png');

import {UserInfoContext} from '../../Context/UserContext';

const Head = () => {
  const User = useContext(UserInfoContext);

  return (
    <View style={styles.wrapper}>
      <View style={styles.head}>
        <Image source={settings} style={styles.imagesettings} />
        <View style={{alignItems: 'center'}}>
          <Text style={styles.name}>{User.name}</Text>
          <View style={styles.locationview}>
            <Image source={iconLocation} style={styles.iconLocation} />
            <Text style={styles.location}>{User.location}</Text>
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
  iconLocation: {
    width: scale(25),
    height: scale(25),
  },
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
    width: scale(30),
    height: scale(30),
    margin: scale(5),
    marginTop: scale(8),
  },
});
