import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';

const localavatar = require('../../image/useravatar4.png');
const localavatar2 = require('../../image/useravatar.png');

const Cardspersonal = props => {
  const {data, navigation} = props;
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => {
        navigation.navigate('Reservation', {dataUser: data});
      }}>
      <Image
        source={localavatar}
        defaultSource={localavatar2}
        style={styles.image}
      />
      <Text style={styles.txname}>{data.name}</Text>
      <Text style={styles.txdepartment}>{data.department}</Text>
    </TouchableOpacity>
  );
};

export default Cardspersonal;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    padding: scale(2),
    borderRadius: scale(12),
    margin: scale(5),
    alignItems: 'center',
  },
  image: {
    width: scale(100),
    height: scale(100),
    margin: scale(2),
    borderRadius: scale(6),
  },
  txname: {
    color: '#000000',
    fontSize: scale(20),
  },
  txdepartment: {},
});
