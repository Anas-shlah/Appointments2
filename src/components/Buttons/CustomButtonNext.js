import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

const CustomButtonNext = props => {
  const {onPress} = props;
  return (
    <TouchableOpacity style={[styles.container]} onPress={onPress}>
      <Text style={styles.text}>Next</Text>
    </TouchableOpacity>
  );
};

export default CustomButtonNext;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: scale(10),
    padding: scale(10),
    backgroundColor: '#906afe',
    borderWidth: scale(2),
    borderColor: '#9072f5',
    borderRadius: scale(25),
  },
  text: {
    color: '#FFFFFF',
    fontSize: scale(20),
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
