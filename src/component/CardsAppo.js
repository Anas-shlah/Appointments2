import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {scale} from 'react-native-size-matters';

import {format} from 'date-fns';
import {TouchableOpacity} from 'react-native';
import ButtonCancel from './Buttons/ButtonCancel';

const localavatar = require('../../image/useravatar4.png');
const localavatar2 = require('../../image/useravatar.png');

const CardsAppo = props => {
  const {data} = props;
  const [backgroundColor, Setbackgroundcolor] = useState('#aae08f');
  //console.log('data  ', data.id);
  const d = data.date.toDate();
  const date = format(d, 'YYY / MM / dd ');
  const time = format(d, 'hh : mm aa');

  return (
    <View style={styles.wrapper}>
      <View style={styles.viewremaining}>
        <Text style={styles.remaining}>Remaining</Text>
      </View>
      <View style={[styles.cardsAppo, {backgroundColor}]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={[styles.text]}>
            With: <Text style={{color: '#ffffff'}}>{data.nameTo}</Text>
          </Text>
          <Image
            source={localavatar}
            defaultSource={localavatar2}
            style={styles.image}
          />
        </View>
        <Text style={[styles.text]}>
          date: <Text style={{color: '#ffffff'}}>{date}</Text>
        </Text>
        <Text style={[styles.text]}>
          Time: <Text style={{color: '#ffffff'}}>{time}</Text>
        </Text>
        <View style={{alignItems: 'center'}}>
          <ButtonCancel data={data} setColor={Setbackgroundcolor} />
        </View>
      </View>
    </View>
  );
};

export default CardsAppo;

const styles = StyleSheet.create({
  wrapper: {
    margin: scale(5),
  },
  cardsAppo: {
    padding: scale(8),
    borderRadius: scale(15),
    borderColor: '#ffffff',
    borderWidth: scale(2),
  },
  viewremaining: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  remaining: {},
  text: {
    fontSize: scale(25),
    color: '#000000',
  },
  image: {
    width: scale(40),
    height: scale(40),
    margin: scale(5),
    borderRadius: scale(20),
  },
});
