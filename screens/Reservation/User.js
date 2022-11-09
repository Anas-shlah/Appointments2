import {StyleSheet, Text, Image, View, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import {scale} from 'react-native-size-matters';
import {UserInfoContext} from '../../Context/UserContext';

const localavatar = require('../../image/useravatar4.png');
const localavatar2 = require('../../image/useravatar.png');
const User = () => {
  const userInfoContext = useContext(UserInfoContext);
  console.log('userInfoContext.name', userInfoContext);
  return (
    <View style={styles.wrapper}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image
          source={localavatar}
          defaultSource={localavatar2}
          style={styles.image}
        />
        <ScrollView horizontal={true}>
          <View>
            <Text style={styles.title1}>
              {userInfoContext ? userInfoContext.name : 'user name'}
            </Text>
            <Text style={styles.title2}>
              {userInfoContext ? userInfoContext.department : 'department'}
            </Text>
            <Text style={styles.title3}>
              📍
              {userInfoContext ? userInfoContext.location : 'location'}
            </Text>
          </View>
        </ScrollView>
      </View>

      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: scale(10),
          }}>
          <Text style={styles.title2}>100</Text>
          <Text style={styles.title2}>10</Text>
          <Text style={styles.title2}>1550</Text>
        </View>
      </View>

      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.title3}>Reviews</Text>
          <Text style={styles.title3}>years exp.</Text>
          <Text style={styles.title3}>Appointments</Text>
        </View>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 20,
    padding: scale(10),
    backgroundColor: '#0f64f4',
  },
  image: {
    width: scale(100),
    height: scale(100),
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: scale(50),
    marginEnd: scale(10),
    backgroundColor: '#0f64f4',
  },
  colorText: {
    color: 'white',
  },
  title1: {
    color: 'white',
    fontSize: scale(25),
  },
  title2: {
    color: 'white',
    fontSize: scale(20),
  },
  title3: {
    color: '#96baf9',
    fontSize: scale(15),
  },
});
