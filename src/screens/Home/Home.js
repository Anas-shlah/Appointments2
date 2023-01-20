import React, {useContext} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';

import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Head from './Head';
import Greeting from './Greeting';
import Trending from './Trending';
import Body from './Body';

import {UserInfoContext} from '../../Context/UserContext';
import AppointmentRequests from './AppointmentRequests';

const Home = ({navigation, route}) => {
  const User = useContext(UserInfoContext);

  return (
    <View style={styles.wrapper}>
      <StatusBar backgroundColor={'#0f64f4'} barStyle={'default'} />
      <Head />
      <ScrollView>
        <View style={styles.wrapper1}>
          <View style={styles.greeting}>
            <Greeting name={User.name} />
            <Text style={styles.welcome}>Welcome back</Text>
          </View>
          <View style={styles.searchview}>
            <TextInput style={styles.inputsearch} placeholder={'Search'} />
            <View style={styles.feltersearch}>
              <Icon name="tune" size={scale(40)} color="#fff" />
            </View>
          </View>
          <Text style={styles.titlefind}>Find what you want</Text>
          <View style={styles.trending}>
            <Trending navigation={navigation} />
          </View>
        </View>
        <View style={styles.wrapper2}>
          <View>
            <Body />
          </View>
          <View>
            <AppointmentRequests />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  wrapper1: {
    backgroundColor: '#0f64f4',
  },
  wrapper2: {},
  head: {},
  welcome: {
    fontSize: scale(22),
    color: 'white',
    fontWeight: '500',
  },
  greeting: {
    marginTop: scale(15),
    marginHorizontal: scale(22),
  },
  inputsearch: {
    backgroundColor: 'white',
    borderRadius: scale(15),
    marginVertical: scale(15),
    fontSize: scale(20),
    padding: scale(10),
    paddingVertical: scale(10),
    width: '80%',
  },
  feltersearch: {
    margin: scale(10),
  },
  searchview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: scale(22),
  },
  titlefind: {
    color: 'white',
    marginHorizontal: scale(22),
    fontSize: scale(15),
  },
  trending: {
    marginVertical: scale(5),
  },
});
