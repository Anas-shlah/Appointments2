import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TextErrorMessage = props => {
  return (
    <View>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default TextErrorMessage;

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
});
