import React, {useContext} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import Body from './Body';
import Greeting from './Greeting';
import Head from './Head';
import Trending from './Trending';

const feltersearch = require('../../image/feltersearch.png');
const {width, height} = Dimensions.get('window');
import {UserInfoContext} from '../../Context/UserContext';
import AppointmentRequests from './AppointmentRequests';

const Home = ({navigation}) => {
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
            <Image source={feltersearch} style={styles.feltersearch} />
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
    width: scale(40),
    height: scale(40),
    // padding: scale(20),
    borderRadius: scale(10),
    backgroundColor: 'white',
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
