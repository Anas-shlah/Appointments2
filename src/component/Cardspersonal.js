import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

const localavatar = require('../../image/useravatar4.png');
const localavatar2 = require('../../image/useravatar.png');

const {width, height} = Dimensions.get('window');

const Cardspersonal = props => {
  const {data} = props;
  return (
    <View style={styles.wrapper}>
      <Image
        source={localavatar}
        defaultSource={localavatar2}
        style={styles.image}
      />
      <Text style={styles.txname}>{data.name}</Text>
      <Text style={styles.txdepartment}>{data.department}</Text>
    </View>
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
    //width: 150,
    //height: 150,
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
