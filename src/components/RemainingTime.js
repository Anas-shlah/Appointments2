import {StyleSheet, Text, View} from 'react-native';
import {getTime, formatRelative} from 'date-fns';
import React from 'react';

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
    borderWidth: 1,
    borderBottomWidth: 0,
    padding: 5,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  textRemaining: {
    fontSize: 15,
    color: '#FDF0E0',
  },
  containernull: {
    padding: 16,
  },
});
