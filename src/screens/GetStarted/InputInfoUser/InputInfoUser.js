import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import Head from './Head';
import Body from './Body';

const InputInfoUser = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#6f5cf5'} />
      <ScrollView>
        <Head />
        <Body navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default InputInfoUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});
