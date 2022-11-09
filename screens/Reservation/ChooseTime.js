import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import {format} from 'date-fns';
import HourOfDay from '../../src/component/HourOfDay';
import {scale} from 'react-native-size-matters';

const keyExtractor = (item, index) => index.toString();

const ChooseTime = props => {
  const {chosenDay, hourArr, SetAppointment} = props;

  const hourThisToday = [];

  if (chosenDay != 'loding') {
    hourArr.map((item, id) => {
      if (
        format(chosenDay, 'YYY / MM / dd ') == format(item, 'YYY / MM / dd ') &&
        hourThisToday.length <= 47
      ) {
        const opj = {
          id: id,
          time: item,
          bookedUp: false,
        };
        if (id % 2 == 0) {
          opj.bookedUp = true;
        }

        hourThisToday.push(opj);
        // console.log(format(item, 'YYY / MM / dd / hh / mm / aa '));
      }
    });
  }
  const [select, Setselect] = useState(0);

  const renderItem = ({item, index}) => {
    return (
      <HourOfDay
        data={item}
        indexs={index}
        select={select}
        Setselect={Setselect}
        SetAppointment={SetAppointment}
      />
    );
  };

  console.log(' chosenDay ', chosenDay);

  return (
    <View style={styles.container}>
      <Text style={styles.taitle}>Choose time</Text>
      <View style={{marginHorizontal: scale(-20)}}>
        <FlatList
          data={hourThisToday}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          initialNumToRender={8}
          ListEmptyComponent={
            <Text style={styles.altText}>
              Sorry, there are no available appointments today
            </Text>
          }
        />
      </View>
    </View>
  );
};

export default ChooseTime;

const styles = StyleSheet.create({
  container: {
    marginVertical: scale(10),
  },
  taitle: {
    color: 'black',
    fontSize: scale(20),
  },
  altText: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: scale(8),
    borderRadius: 20,
    padding: scale(10),
    backgroundColor: '#aae08f',
    color: '#ffffff',
    fontSize: scale(13),
  },
});
