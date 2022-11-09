import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import {format} from 'date-fns';

const DayOfMonth = props => {
  const {data, index, select, Setselect, chosenDay} = props;

  const nameDay = format(data, 'EE');
  const numDay = format(data, 'd');

  const onPresss = () => {
    Setselect(index);
    chosenDay(data);
  };
  useEffect(() => {
    if (index == 0) {
      onPresss();
    }
    //chosenDay(data);
  }, []);

  //console.log(format(data, 'EE'));
  return (
    <TouchableOpacity
      style={select == index ? styles.containerSelected : styles.container}
      onPress={() => {
        onPresss();
      }}>
      <Text style={select == index ? styles.textSelected : styles.text}>
        {nameDay}
      </Text>
      <Text style={select == index ? styles.textSelected : styles.text}>
        {numDay}
      </Text>
    </TouchableOpacity>
  );
};
export default DayOfMonth;

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
});
