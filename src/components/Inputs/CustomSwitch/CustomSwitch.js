import {StyleSheet, Switch, Text, View} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

const CustomSwitch = props => {
  const {title, value, setValue, Note} = props;
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.title}>{title}</Text>
        <Switch
          trackColor={{false: '#393e78', true: '#5b53d7'}}
          thumbColor={value ? '#6f5cf5' : '#7c80a7'}
          style={styles.switch}
          value={value}
          onValueChange={() => (setValue ? setValue(!value) : null)}
        />
      </View>
      {Note ? <Text style={styles.note}>{Note}</Text> : null}
    </View>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  container: {
    marginVertical: scale(10),
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: scale(18),
  },
  note: {
    fontSize: scale(13),
    color: '#7c80a7',
  },
});
