import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';

import DayOfMonth from '../../src/component/DayOfMonth';

const keyExtractor = (item, index) => index.toString();

const Schedules = props => {
  const {dateArr, chosenDay} = props;
  const [select, Setselect] = useState(0);

  const renderItem = ({item, index}) => {
    return (
      <DayOfMonth
        data={item}
        index={index}
        select={select}
        Setselect={Setselect}
        chosenDay={chosenDay}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.taitle}>Schedules</Text>
      <View style={{marginHorizontal: scale(-20)}}>
        <FlatList
          data={dateArr}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          horizontal={true}
          initialScrollIndex={select}
        />
      </View>
    </View>
  );
};

export default Schedules;

const styles = StyleSheet.create({
  container: {
    marginVertical: scale(10),
  },
  taitle: {
    color: 'black',
    fontSize: scale(20),
  },
});

/*
const [dataStata, setData] = useState.React(ary2);
const [Switch, setSwitch] = useState.React(false);
const ary2 = ['louding', 'louding'];


  if (dateArr.length == 31) {
    setSwitch(true);
  } else {
    setSwitch(false);
  }

  useEffect(() => {
    if (Switch == true) {
      setData(dateArr);
    }
  }, [Switch]);
  */
