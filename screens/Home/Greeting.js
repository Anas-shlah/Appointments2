import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getTime, format} from 'date-fns';
import {scale} from 'react-native-size-matters';

const greeting = () => {
  var hour = format(getTime(new Date()), 'H');
  if (hour < 12) {
    return 'Morning';
  }
  if (hour < 17) {
    return 'Afternoon';
  }
  return 'Evening';
};

const Greeting = props => {
  const {name} = props;
  return (
    <View>
      <Text style={styles.text}>
        Good {greeting()} , {name}
      </Text>
    </View>
  );
};

export default Greeting;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: scale(15),
  },
});
