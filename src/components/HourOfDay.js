import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {format} from 'date-fns';

const HourOfDay = props => {
  const {data, indexs, select, Setselect, SetAppointment} = props;
  const {bookedUp, Acceptable, isYou} = data;

  const time = format(data.time, ' hh : mm aa');
  const onPresss = () => {
    Setselect(indexs);
    SetAppointment(data);
  };
  /*
  const opj = {
            id: id,
            time: item,
            bookedUp: false,
            Acceptable: false,
            isYou: false,
            isHe: true,
          };
  */
  return (
    <TouchableOpacity
      style={
        indexs == select && bookedUp == false
          ? [styles.container, styles.containerSelected]
          : bookedUp == 'bookedUp' && Acceptable == 'accept' && isYou == false
          ? [styles.container, styles.containerSelectedUnBookedUpUnYou]
          : bookedUp == 'bookedUp' && Acceptable == 'accept' && isYou == true
          ? [styles.container, styles.containerSelectedbookedUpYou]
          : bookedUp == 'bookedUp' && Acceptable == 'waiting' && isYou == false
          ? [styles.container, styles.containerSelectedUnBookedUpUnYou]
          : bookedUp == 'bookedUp' && Acceptable == 'waiting' && isYou == true
          ? [styles.container, styles.containerSelectedbookedUpYou]
          : indexs != select && bookedUp == false
          ? [styles.container, styles.containerUnSelected]
          : null
      }
      onPress={() => {
        onPresss();
      }}>
      <Text
        style={
          indexs == select && bookedUp == false
            ? [styles.text, styles.textSelectedunBookedUp]
            : bookedUp == 'bookedUp' && Acceptable == 'accept' && isYou == false
            ? [styles.text, styles.textSelectedbookedUp]
            : bookedUp == 'bookedUp' && Acceptable == 'accept' && isYou == true
            ? [styles.text, styles.textSelectedbookedUp]
            : bookedUp == 'bookedUp' &&
              Acceptable == 'waiting' &&
              isYou == false
            ? [styles.text, styles.textSelectedbookedUp]
            : bookedUp == 'bookedUp' && Acceptable == 'waiting' && isYou == true
            ? [styles.text, styles.textSelectedbookedUp]
            : indexs != select && bookedUp == false
            ? [styles.text, styles.textUnSelectedunBookedUp]
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
    // padding: scale(10),
    paddingHorizontal: scale(15),
    paddingVertical: scale(7),
  },
  containerSelected: {
    backgroundColor: '#aae08f',
  },
  containerSelectedbookedUpYou: {
    backgroundColor: '#0DE090',
  },
  containerSelectedUnBookedUpUnYou: {
    backgroundColor: '#E08F8F',
  },
  containerUnSelected: {
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: scale(20),
    margin: scale(1),
  },
  textUnSelectedunBookedUp: {
    color: '#000000',
  },
  textSelectedunBookedUp: {
    color: '#ffffff',
  },
  textSelectedbookedUp: {
    color: '#ffffff',
  },
});
// error color E08F8F
