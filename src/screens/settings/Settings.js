import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {scale} from 'react-native-size-matters';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width} = Dimensions.get('screen');
const localavatar = require('../../assets/image/useravatar4.png');
const localavatar2 = require('../../assets/image/useravatar.png');
const sizeImage = scale(110);
const Settings = ({navigation}) => {
  const SignOut = async () => {
    await auth().signOut();
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
    // AsyncStorage.clear();
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={require('../../assets/image/imageBackgroundProfile.png')}
          style={{height: scale(140)}}>
          <Image
            source={localavatar}
            defaultSource={localavatar2}
            style={styles.userImg}
          />
        </ImageBackground>
        <View style={styles.drawerListWrapper}>
          <TouchableOpacity
            style={styles.ViewButtons}
            onPress={() => navigation.navigate('Home')}>
            <Icon name="home" size={scale(35)} color="#fff" />
            <Text style={styles.textSignOut}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ViewButtons}
            onPress={() => alert('soon')}>
            <Icon name="notifications" size={scale(35)} color="#fff" />
            <Text style={styles.textSignOut}>Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ViewButtons}
            onPress={() => alert('soon')}>
            <Icon name="settings" size={scale(35)} color="#fff" />
            <Text style={styles.textSignOut}>Setting</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ViewButtons}
            onPress={() => navigation.navigate('InputInfoUser')}>
            <Icon name="engineering" size={scale(35)} color="#fff" />
            <Text style={styles.textSignOut}>Manage Account</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.ViewSignOut]}
            onPress={() => {
              SignOut();
            }}>
            <Icon name="exit-to-app" size={scale(35)} color="#fff" />
            <Text style={styles.textSignOut}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userImg: {
    width: sizeImage,
    height: sizeImage,
    borderRadius: sizeImage / 2,
    position: 'absolute',
    left: width / 2 - sizeImage / 2,
    bottom: -sizeImage / 2,
    borderWidth: scale(4),
    borderColor: '#FFF',
  },
  drawerListWrapper: {
    flex: 1,
    marginTop: scale(65),
    margin: scale(25),
  },
  ViewSignOut: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(50),
    borderWidth: scale(2),
    backgroundColor: '#2d7976',
    borderColor: '#4ccac5',
    padding: scale(5),
  },
  textSignOut: {
    color: '#FFF',
    fontSize: scale(25),
    marginHorizontal: scale(5),
  },
  ViewButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: scale(2),
    borderColor: '#2d7976',
    padding: scale(5),
    marginVertical: scale(10),
  },
});
