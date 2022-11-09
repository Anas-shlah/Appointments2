import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {format} from 'date-fns';

const HourOfDay = props => {
  const {data, indexs, select, Setselect, SetAppointment} = props;

  const [bookedUp, SetbookedUp] = useState(data.bookedUp);

  // console.log(' data ', data);
  const time = format(data.time, ' hh : mm aa');
  const onPresss = () => {
    Setselect(indexs);
    SetAppointment(data);
    // SetbookedUp(true);
    // console.log('sele ', select, ' ind ', indexs);
  };
  return (
    <TouchableOpacity
      style={
        indexs == select && bookedUp == false
          ? styles.containerSelected
          : indexs == select && bookedUp == true
          ? styles.containerSelectedbookedUpY
          : indexs != select && bookedUp == true
          ? styles.containerSelectedbookedUpY
          : indexs != select && bookedUp == false
          ? styles.container
          : null
      }
      onPress={() => {
        onPresss();
      }}>
      <Text
        style={
          indexs == select && bookedUp == false
            ? styles.textSelected
            : indexs == select && bookedUp == true
            ? styles.textSelectedbookedUp
            : indexs != select && bookedUp == true
            ? styles.textSelectedbookedUp
            : indexs != select && bookedUp == false
            ? styles.text
            : null
        }>
        {time}
      </Text>
    </TouchableOpacity>
  );
};

export default HourOfDay;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: scale(8),
    borderRadius: 20,
    padding: scale(10),
    backgroundColor: 'white',
  },
  containerSelected: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: scale(8),
    borderRadius: 20,
    padding: scale(10),
    backgroundColor: '#aae08f',
  },
  text: {
    color: 'black',
    fontSize: scale(20),
    margin: scale(1),
  },
  textSelected: {
    color: '#ffffff',
    fontSize: scale(20),
    margin: scale(1),
  },
  containerSelectedbookedUp: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: scale(8),
    borderRadius: 20,
    padding: scale(10),
    backgroundColor: '#0DE090',
  },
  containerSelectedbookedUpY: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: scale(8),
    borderRadius: 20,
    padding: scale(10),
    backgroundColor: '#E08F8F',
  },
  textSelectedbookedUp: {
    color: '#ffffff',
    fontSize: scale(20),
    margin: scale(1),
  },
});
// error color E08F8F
