import React, {useEffect, useState} from 'react';
import {View, StyleSheet, StatusBar, ImageBackground} from 'react-native';
import {scale} from 'react-native-size-matters';
import {getUserData} from '../../../firebase/dataUserSynchronization';

const Splash = ({navigation, route}) => {
  const {SetuserInfoContext} = route.params;
  const [NavigationTo, setNavigationTo] = useState(false);
  const [numColor, setNumColor] = useState(0);
  const color = ['#aae08f', '#E5D9B6', '#E08F8F', '#0DE090'];

  let interval;
  useEffect(() => {
    interval = setInterval(() => {
      if (numColor == 3) {
        setNumColor(0);
        if (NavigationTo) {
          navigation.replace(NavigationTo);
        } else {
          getUserData(SetuserInfoContext, setNavigationTo);
        }
      } else {
        setNumColor(numColor + 1);
      }
      console.log('interval');
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [numColor]);

  useEffect(() => {
    getUserData(SetuserInfoContext, setNavigationTo);
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: color[numColor]}]}>
      <StatusBar hidden={true} animated={true} />
      <ImageBackground
        style={styles.logo}
        resizeMode="cover"
        source={require('../../../assets/image/Splash.png')}
      />
    </View>
  );
};
export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: scale(225),
    height: scale(225),
    justifyContent: 'center',
  },
});
