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
import {addDays, eachDayOfInterval, format} from 'date-fns';
import {scale} from 'react-native-size-matters';

/** */
import BookAppointment from '../../firebase/BookApointment';
import {UserInfoContext} from '../../Context/UserContext';

/** */

const date = new Date();
const startDays =
  format(date, 'H') == 23 && format(date, 'mm') > 15 ? addDays(date, 1) : date;
const endDays = addDays(date, 30);

const dateArr = eachDayOfInterval({
  start: startDays,
  end: endDays,
});

const txtAcceptAppointment = 'Book Appointment     >';
// const textCancelAppointment = 'Cancel Appointment';

const Reservation = ({route, navigation}) => {
  const {dataUser} = route.params;
  const userAdmin = useContext(UserInfoContext);
  const [chosenDay, SetchosenDay] = useState('loding');
  const [Appointment, SetAppointment] = useState();
  // const [disabled, Setdisabled] = useState(true);
  /*
  const opj = {
            id: id,
            time: item,
            bookedUp: false,
            Acceptable: false,
            isYou: false,
            isHe: true,
          };
  */
  var formatAppointment = 'YYY/MM/dd hh:mm aaa';
  var disabled = true;
  if (Appointment != undefined) {
    formatAppointment = format(Appointment.time, 'YYY/MM/dd hh:mm aaa');
  }

  const SelectionInfo =
    Appointment == undefined
      ? 'Choose a time that works for you'
      : Appointment.bookedUp == 'bookedUp' &&
        Appointment.Acceptable == 'accept' &&
        Appointment.isYou == true &&
        Appointment.isHe == true
      ? 'Indeed, there is a Appointment between you two'
      : Appointment.bookedUp == 'bookedUp' &&
        Appointment.Acceptable == 'waiting' &&
        Appointment.isYou == true &&
        Appointment.isHe == true
      ? 'Waiting for the appointment to be accepted or rejected'
      : Appointment.bookedUp == 'bookedUp' &&
        Appointment.Acceptable == 'waiting' &&
        Appointment.isYou == true &&
        Appointment.isHe == false
      ? 'You have an appointment at the same time waiting for approval or rejection'
      : Appointment.bookedUp == 'bookedUp' &&
        Appointment.Acceptable == 'waiting' &&
        Appointment.isYou == false &&
        Appointment.isHe == true
      ? 'So far, this appointment can not be booked, try later'
      : Appointment.bookedUp == 'bookedUp' &&
        Appointment.Acceptable == 'accept' &&
        Appointment.isYou == true &&
        Appointment.isHe == false
      ? 'You cannot book this appointment, you have an appointment at the same time with: ' +
        Appointment.nameTo
      : Appointment.bookedUp == 'bookedUp' &&
        Appointment.Acceptable == 'accept' &&
        Appointment.isYou == false &&
        Appointment.isHe == true
      ? 'You cannot book this appointment, ' +
        dataUser.name +
        ' is busy at this time'
      : 'The chosen time is:';
  if (SelectionInfo == 'The chosen time is:') {
    disabled = false;
  } else {
    disabled = true;
  }
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <StatusBar backgroundColor={'#D3DEDC'} barStyle={'dark-content'} />
        <View style={styles.innerWrapper}>
          <User dataUser={dataUser} />
          <View>
            <Text style={styles.TitleBio}>Bio</Text>
            <Text style={styles.textBio}>
              {dataUser ? dataUser.bio : 'Bio text'} , Book an appointment now
            </Text>
          </View>
          <View>
            <Schedules dateArr={dateArr} chosenDay={SetchosenDay} />
            <ChooseTime
              chosenDay={chosenDay}
              SetAppointment={SetAppointment}
              dataUser={dataUser}
            />
          </View>
          <View>
            <Text style={styles.TitleBio}>Selection info</Text>
            <View style={styles.boxselectinfo}>
              <Text style={[styles.selectinfo, styles.SelectionInfoText]}>
                {SelectionInfo}
              </Text>
              <Text style={[styles.selectinfo, styles.formatAppointment]}>
                {formatAppointment != 'YYY/MM/dd hh:mm aaa'
                  ? formatAppointment
                  : null}
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={disabled == true ? styles.buttonDisabled : styles.button}
              onPress={() => {
                disabled == false
                  ? (BookAppointment(userAdmin, dataUser, Appointment.time),
                    SetAppointment())
                  : null;
              }}>
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
    backgroundColor: '#D3DEDC',
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
  buttonDisabled: {
    backgroundColor: '#cccccc',
    marginVertical: scale(10),
    padding: scale(15),
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#999999',
    borderRadius: scale(15),
  },
  textButton: {
    fontSize: scale(15),
    fontWeight: '500',
    color: 'white',
  },
  selectinfo: {
    fontSize: scale(18),
    textAlign: 'center',
    lineHeight: scale(25),
    textAlignVertical: 'center',
  },
  SelectionInfoText: {
    color: '#084594',
    textTransform: 'capitalize',
  },
  formatAppointment: {
    color: '#0F3D3E',
  },
  boxselectinfo: {
    alignItems: 'center',
    flexDirection: 'column',
  },
});
