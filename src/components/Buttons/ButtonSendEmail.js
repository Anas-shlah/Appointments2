import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {scale} from 'react-native-size-matters';

const ButtonSendEmail = props => {
  const {onClick} = props;
  // const onPress = ()=>{
  //   onclick()
  // }
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onClick();
      }}>
      <Icon name="forward-to-inbox" size={scale(45)} color="green" />
    </TouchableOpacity>
  );
};

export default ButtonSendEmail;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 35,
    backgroundColor: '#E0E0E0',
  },
});
