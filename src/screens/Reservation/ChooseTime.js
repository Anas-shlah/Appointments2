import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {
  add,
  eachMinuteOfInterval,
  format,
  roundToNearestMinutes,
} from 'date-fns';
import HourOfDay from '../../components/HourOfDay';
import {scale} from 'react-native-size-matters';
import {fetchAppointment} from '../../firebase/ChoswTime';

import {UserInfoContext} from '../../Context/UserContext';

const ChooseTime = props => {
  const {chosenDay, SetAppointment, dataUser} = props;
  const {email: AdminEmail} = useContext(UserInfoContext);
  const [arrydata, Setarrydata] = useState();
  const [UserFrom, SetUserFrom] = useState([]);
  const [AdminFrom, SetAdminFrom] = useState([]);
  const [UserTo, SetUserTo] = useState([]);
  const [AdminTo, SetAdminTo] = useState([]);

  useEffect(() => {
    // add data
    const arry = [];
    arry.push(...UserFrom);
    arry.push(...UserTo);
    arry.push(...AdminFrom);
    arry.push(...AdminTo);
    Setarrydata(arry);
    return;
  }, [UserFrom, UserTo, AdminFrom, AdminTo]);

  fetchAppointment(dataUser.email, 'from', SetUserFrom);
  fetchAppointment(dataUser.email, 'to', SetUserTo);
  fetchAppointment(AdminEmail, 'to', SetAdminFrom);
  fetchAppointment(AdminEmail, 'to', SetAdminTo);

  //create item Choose time
  const daynow = roundToNearestMinutes(new Date(), {
    nearestTo: 30,
    roundingMethod: 'ceil',
  });

  var hourArr2 = [];
  var hourThisToday = [];
  var dayStart = {};

  if (chosenDay != 'loding') {
    if (
      format(chosenDay, 'YYY / MM / dd ') == format(daynow, 'YYY / MM / dd ')
    ) {
      dayStart = daynow;
    } else {
      dayStart = chosenDay;
    }

    const dayEnd = add(dayStart, {
      hours: 23 - parseInt(format(dayStart, 'H')),
      minutes: parseInt(format(dayStart, 'mm')) == 0 ? 30 : 0,
    });
    if (
      format(dayStart, 'YYY / MM / dd / H / mm') ==
      format(dayEnd, 'YYY / MM / dd / H / mm')
    ) {
      hourArr2 = [dayEnd];
    } else {
      hourArr2 = eachMinuteOfInterval(
        {
          start: dayStart,
          end: dayEnd,
        },
        {step: 30},
      );
    }
    // END create item Choose time

    //
    // Enter data in item choose time
    hourArr2.map((item, id) => {
      const filterdateLevel1 = arrydata.filter(
        (x, {from, to}) =>
          format(x.date.toDate(), 'YYY/MM/dd/ hh:mm aa') ==
            format(item, 'YYY/MM/dd/ hh:mm aa') &&
          ((x.from == AdminEmail && x.to == dataUser.email) ||
            (x.to == AdminEmail && x.from == dataUser.email)),
      );
      const filterdateLevel2 = arrydata.filter(
        (x, {from, to}) =>
          format(x.date.toDate(), 'YYY/MM/dd/ hh:mm aa') ==
            format(item, 'YYY/MM/dd/ hh:mm aa') &&
          (x.from == dataUser.email || x.to == dataUser.email) &&
          (x.from != AdminEmail || x.to != AdminEmail),
      );
      const filterdateLevel3 = arrydata.filter(
        (x, {from, to}) =>
          format(x.date.toDate(), 'YYY/MM/dd/ hh:mm aa') ==
            format(item, 'YYY/MM/dd/ hh:mm aa') &&
          (x.from || x.to == AdminEmail) &&
          (x.from != dataUser.email || x.to != dataUser.email),
      );
      // console.log(format(item, 'YYY/MM/dd/ hh:mm aa'));
      var opj = {
        id: id,
        time: item,
        bookedUp: false,
        Acceptable: false,
        isYou: false,
        isHe: false,
      };
      if (filterdateLevel1.length > 0) {
        const destruction = filterdateLevel1[0];
        opj = {
          id: id,
          time: item,
          bookedUp: destruction.bookingStatus,
          Acceptable: destruction.Acceptable,
          isYou: true,
          isHe: true,
        };
      } else {
        if (filterdateLevel2.length > 0) {
          const destruction = filterdateLevel2[0];
          opj = {
            id: id,
            time: item,
            bookedUp: destruction.bookingStatus,
            Acceptable: destruction.Acceptable,
            isYou: false,
            isHe: true,
          };
        } else {
          if (filterdateLevel3.length > 0) {
            const destruction = filterdateLevel3[0];
            opj = {
              id: id,
              time: item,
              bookedUp: destruction.bookingStatus,
              Acceptable: destruction.Acceptable,
              isYou: true,
              isHe: false,
              nameTo: destruction.nameTo,
            };
          } else {
            opj = {
              id: id,
              time: item,
              bookedUp: false,
              Acceptable: false,
              isYou: false,
              isHe: false,
            };
          }
        }
      }
      hourThisToday.push(opj);
    });
  }
  const [select, Setselect] = useState();
  console.log('hourThisToday  ', hourThisToday.length);

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
