import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';

import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Donefire, UnDonefire} from '../../firebase/DoneUnDone';

const ButtonDoneUnDone = props => {
  const {data, setColor} = props;
  const [ActivityDone, SetActivityDone] = useState({
    disabled: false,
    indicator: false,
  });
  const [ActivityUnDoneIcon, SetActivityUnDoneIcon] = useState({
    disabled: false,
    indicator: false,
  });

  const UnDone = () => {
    SetActivityDone({disabled: true});
    SetActivityUnDoneIcon({indicator: true});

    setColor('#E08F8F');
    UnDonefire(data);
  };
  const Done = () => {
    SetActivityUnDoneIcon({disabled: true});
    SetActivityDone({indicator: true});
    setColor('#aae08f');
    Donefire(data);
  };

  return (
    <View style={styles.viewTwoButtoms}>
      <TouchableOpacity onPress={Done} style={styles.acceptButtomIcon}>
        {ActivityDone.disabled != true && ActivityDone.indicator != true ? (
          <View>
            <Icon
              name="assignment-turned-in"
              size={scale(45)}
              color="#0DE090"
            />
            <Text style={styles.AcceptTextIcon}>Done</Text>
          </View>
        ) : ActivityDone.indicator == true ? (
          <View>
            <ActivityIndicator color={'#000000'} />
            <Text style={styles.AcceptTextIcon}>Done</Text>
          </View>
        ) : null}
      </TouchableOpacity>

      <TouchableOpacity onPress={UnDone} style={styles.cancelButtomIcon}>
        {ActivityUnDoneIcon.disabled != true &&
        ActivityUnDoneIcon.indicator != true ? (
          <View>
            <Icon name="event-busy" size={scale(45)} color="red" />
            <Text style={styles.cancelTextIcon}>UnDone</Text>
          </View>
        ) : ActivityUnDoneIcon.indicator == true ? (
          <View>
            <ActivityIndicator color={'red'} />
            <Text style={styles.cancelTextIcon}>UnDone</Text>
          </View>
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default ButtonDoneUnDone;

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
    textAlign: 'center',
  },
  cancelTextIcon: {
    color: '#ffffff',
    fontSize: scale(15),
    textAlign: 'center',
  },
  acceptButtomIcon: {},
  cancelButtomIcon: {},
});
