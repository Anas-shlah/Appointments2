import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useContext} from 'react';

import {scale} from 'react-native-size-matters';
import {format, differenceInHours} from 'date-fns';

import ButtonCancel from './Buttons/ButtonCancelAccept';
import RemainingTime from './RemainingTime';
import {UserInfoContext} from '../Context/UserContext';
import ButtonDoneUnDone from './Buttons/ButtonDoneUnDone';

const localavatar = require('../assets/image/useravatar4.png');
const localavatar2 = require('../assets/image/useravatar.png');

const CardsAppo = props => {
  const {data} = props;
  console.log(data.key, 'hi');
  const d = data.date.toDate();
  const date = format(d, 'YYY / MM / dd ');
  const time = format(d, 'hh : mm aa');
  const Admin = useContext(UserInfoContext);
  const Acceptable = data.Acceptable;
  const differenceHours = differenceInHours(d, new Date());
  var WithOrAt;
  var nameto;
  var colorBackground = '#aae08f';
  if (data.to == Admin.email) {
    WithOrAt = 'With:';
    nameto = data.nameFrom;
    colorBackground = '#E5D9B6';
  } else {
    WithOrAt = 'at:';
    nameto = data.nameTo;
  }
  const [backgroundColor, Setbackgroundcolor] = useState(colorBackground);

  return (
    <View style={styles.wrapper}>
      <View style={styles.viewremaining}>
        <RemainingTime date={d} />
      </View>
      <View style={[styles.cardsAppo, {backgroundColor}]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={[styles.text]}>
            {WithOrAt} <Text style={{color: '#ffffff'}}>{nameto}</Text>
          </Text>
          <Image
            source={localavatar}
            defaultSource={localavatar2}
            style={styles.image}
          />
        </View>
        <Text style={[styles.text]}>
          date: <Text style={{color: '#ffffff'}}>{date}</Text>
        </Text>
        <Text style={[styles.text]}>
          Time: <Text style={{color: '#ffffff'}}>{time}</Text>
        </Text>
        <View>
          {Acceptable != 'waiting' && differenceHours <= 0 ? (
            <ButtonDoneUnDone data={data} setColor={Setbackgroundcolor} />
          ) : (
            <ButtonCancel
              data={data}
              setColor={Setbackgroundcolor}
              Acceptable={Acceptable}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default CardsAppo;

const styles = StyleSheet.create({
  wrapper: {
    margin: scale(5),
  },
  cardsAppo: {
    padding: scale(8),
    borderRadius: scale(15),
    borderColor: '#ffffff',
    borderWidth: scale(2),
  },
  viewremaining: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  remaining: {},
  text: {
    fontSize: scale(25),
    color: '#000000',
  },
  image: {
    width: scale(40),
    height: scale(40),
    margin: scale(5),
    borderRadius: scale(20),
  },
});
