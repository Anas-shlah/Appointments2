import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {scale} from 'react-native-size-matters';
import firestore from '@react-native-firebase/firestore';
import {cancelAppo} from '../../../firebase/apiService';

const ButtonCancel = props => {
  const {data, setColor} = props;
  const [Activity, SetActivity] = useState('cancel');
  const cancel = () => {
    SetActivity(<ActivityIndicator color={'#aae08f'} />);
    cancelAppo(data);
    setColor('#E08F8F');
  };
  return (
    <View>
      <TouchableOpacity onPress={cancel} style={styles.cancelButton}>
        <Text style={styles.cancelText}>{Activity}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonCancel;

const styles = StyleSheet.create({
  cancelButton: {
    backgroundColor: '#E08F8F',
    padding: scale(8),
    borderRadius: scale(15),
    margin: scale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    color: '#ffffff',
    fontSize: scale(20),
  },
});
