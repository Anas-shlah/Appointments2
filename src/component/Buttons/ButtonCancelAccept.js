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
// import {cancelAppo} from '../../../firebase/cancelAppo';
import {cancelAppo, AcceptAppo} from '../../../firebase/cancelAcceptAppo';
// import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ButtonCancel = props => {
  const {data, setColor, Acceptable} = props;
  const [ActivityCancle, SetActivityCancle] = useState('cancel');
  const [ActivityAccept, SetActivityAccept] = useState({
    disabled: false,
    indicator: false,
  });
  const [ActivityCancelIcon, SetActivityCancelIcon] = useState({
    disabled: false,
    indicator: false,
  });

  const cancel = () => {
    if (Acceptable == 'waiting') {
      SetActivityAccept({disabled: true});
      SetActivityCancelIcon({indicator: true});
    } else {
      SetActivityCancle(<ActivityIndicator color={'#aae08f'} />);
    }
    // alert(data.date);
    setColor('#E08F8F');
    cancelAppo(data);
  };
  const Accept = () => {
    SetActivityCancelIcon({disabled: true});
    SetActivityAccept({indicator: true});
    // alert(data.date);
    setColor('#aae08f');
    AcceptAppo(data);
  };

  if (Acceptable == 'waiting') {
    return (
      <View style={styles.viewTwoButtoms}>
        <TouchableOpacity onPress={Accept} style={styles.acceptButtomIcon}>
          {ActivityAccept.disabled != true &&
          ActivityAccept.indicator != true ? (
            <View>
              <Icon name="check-box" size={scale(45)} color="#0DE090" />
              <Text style={styles.AcceptTextIcon}>Accept</Text>
            </View>
          ) : ActivityAccept.indicator == true ? (
            <View>
              <ActivityIndicator color={'#000000'} />
              <Text style={styles.AcceptTextIcon}>Accept</Text>
            </View>
          ) : null}
        </TouchableOpacity>

        <TouchableOpacity onPress={cancel} style={styles.cancelButtomIcon}>
          {ActivityCancelIcon.disabled != true &&
          ActivityCancelIcon.indicator != true ? (
            <View>
              <Icon name="cancel-presentation" size={scale(45)} color="red" />
              <Text style={styles.cancelTextIcon}>cancel</Text>
            </View>
          ) : ActivityCancelIcon.indicator == true ? (
            <View>
              <ActivityIndicator color={'red'} />
              <Text style={styles.cancelTextIcon}>cancel</Text>
            </View>
          ) : null}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={{alignItems: 'center', alignContent: 'center'}}>
        <TouchableOpacity onPress={cancel} style={styles.cancelButton}>
          <Text style={styles.cancelText}>{ActivityCancle}</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default ButtonCancel;

const styles = StyleSheet.create({
  cancelButton: {
    backgroundColor: '#E08F8F',
    padding: scale(8),
    borderRadius: scale(15),
    margin: scale(5),
  },
  viewTwoButtoms: {
    marginTop: scale(5),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'auto',
  },
  cancelText: {
    color: '#ffffff',
    fontSize: scale(20),
  },
  AcceptTextIcon: {
    color: '#ffffff',
    fontSize: scale(15),
  },
  cancelTextIcon: {
    color: '#ffffff',
    fontSize: scale(15),
  },
  acceptButtomIcon: {},
  cancelButtomIcon: {},
});
