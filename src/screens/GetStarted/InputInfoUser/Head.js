import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

const Head = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={[styles.text, styles.title]}>Welcome</Text>
        <Text style={[styles.text, styles.title2]}>
          Please, complete the data entry
        </Text>
        <View style={styles.horizontal} />
        <Text style={[styles.text, styles.title3]}>
          Minutes and we have a more wonderful experience... We are waiting for
          you
        </Text>
      </View>
    </View>
  );
};

export default Head;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6858ff',
    padding: scale(10),
    borderBottomRightRadius: scale(40),
    paddingBottom: scale(20),
  },
  view: {
    margin: scale(20),
  },
  horizontal: {
    backgroundColor: '#9790e9',
    height: scale(1),
    marginVertical: scale(7),
  },
  title: {
    fontSize: scale(30),
    fontWeight: 'bold',
  },
  title2: {
    fontSize: scale(20),
    fontWeight: '400',
  },
  title3: {
    fontSize: scale(15),
  },
  text: {
    color: '#ffffff',
  },
});
