import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import User from './User';
import Schedules from './Schedules';
import ChooseTime from './ChooseTime';
import {
  addDays,
  eachDayOfInterval,
  eachMinuteOfInterval,
  getTime,
  roundToNearestMinutes,
  format,
} from 'date-fns';
import {scale} from 'react-native-size-matters';

/** */
import firestore from '@react-native-firebase/firestore';
import faindData from '../../firebase/firebase-config';
import {UserInfoContext} from '../../Context/UserContext';

/** */

const date = getTime(new Date());
const startDays = addDays(date, 0);
const endDays = addDays(date, 30);

const hourArr = eachMinuteOfInterval(
  {
    start: roundToNearestMinutes(date, {nearestTo: 30}),
    end: addDays(date, 30),
  },
  {step: 30},
);

const dateArr = eachDayOfInterval({
  start: startDays,
  end: endDays,
});
const txtAcceptAppointment = 'Book Appointment     >';
const textCancelAppointment = 'Cancel Appointment';

const Reservation = () => {
  const userInfoContext = useContext(UserInfoContext);
  // console.log('data is: ', userInfoContext);
  const [chosenDay, SetchosenDay] = useState('loding');
  const [Appointment, SetAppointment] = useState();
  // console.log('1  ', chosenDay);
  // console.log('Appointment  ', Appointment);
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <StatusBar backgroundColor={'#dce1f4'} barStyle={'dark-content'} />
        <View style={styles.innerWrapper}>
          <User />
          <View>
            <Text style={styles.TitleBio}>Bio</Text>
            <Text style={styles.textBio}>
              {userInfoContext ? userInfoContext.bio : 'Bio text'} , Book an
              appointment now
            </Text>
          </View>
          <View>
            <Schedules dateArr={dateArr} chosenDay={SetchosenDay} />
            <ChooseTime
              chosenDay={chosenDay}
              hourArr={hourArr}
              SetAppointment={SetAppointment}
            />
          </View>
          <View>
            <Text style={styles.TitleBio}>Selection info</Text>
            <View style={styles.boxselectinfo}>
              <Text style={styles.selectinfo}>
                {Appointment == undefined
                  ? 'Loding'
                  : format(Appointment.time, 'YYY/MM/dd hh:mm aaa')}
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.button} onPress={faindData}>
              <Text style={styles.textButton}>{txtAcceptAppointment}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Reservation;

const styles = StyleSheet.create({
  wrapper: {
    //flex: 1,
    backgroundColor: '#dce1f4',
  },
  innerWrapper: {
    padding: scale(20),
  },
  TitleBio: {
    fontSize: scale(20),
    color: 'black',
  },
  textBio: {
    fontSize: scale(15),
  },
  pagerView: {},
  button: {
    backgroundColor: '#0f64f4',
    marginVertical: scale(10),
    padding: scale(15),
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: scale(15),
  },
  textButton: {
    fontSize: scale(15),
    fontWeight: '500',
    color: 'white',
  },
  selectinfo: {
    fontSize: scale(18),
  },
  boxselectinfo: {
    alignItems: 'center',
    flexDirection: 'column',
  },
});
