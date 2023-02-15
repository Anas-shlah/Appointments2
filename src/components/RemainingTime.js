import {StyleSheet, Text, View} from 'react-native';
import {getTime, formatRelative} from 'date-fns';
import React from 'react';
import {scale} from 'react-native-size-matters';

const RemainingTime = props => {
  const {date} = props;
  const datenow = getTime(new Date());

  const remaining = formatRelative(date, datenow);
  const indexremove = remaining.indexOf('at');
  if (indexremove != -1) {
    const newremaining = remaining.slice(0, indexremove);

    return (
      <View style={styles.container}>
        <Text style={styles.textRemaining}>{newremaining}</Text>
      </View>
    );
  } else {
    return <View style={styles.containernull}></View>;
  }
};

export default RemainingTime;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7978FF',
    borderColor: '#C47AFF',
    borderWidth: scale(1),
    borderBottomWidth: 0,
    padding: scale(5),
    borderTopStartRadius: scale(10),
    borderTopEndRadius: scale(10),
  },
  textRemaining: {
    fontSize: scale(15),
    color: '#FDF0E0',
  },
  containernull: {
    padding: scale(16),
  },
});
