import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

const CustomTextInput = props => {
  const {
    title,
    type,
    placeholder,
    value,
    onChangeText,
    autoFocus,
    multiline,
    disabled,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={'#7c80a7'}
          keyboardType={type ? type : null}
          value={value}
          autoFocus={autoFocus}
          onChangeText={onChangeText}
          multiline={multiline}
          editable={disabled ? false : true}
        />
      </View>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
    marginVertical: scale(10),
  },
  containerTitle: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  containerInput: {
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: scale(5),
  },
  title: {
    color: '#FFFFFF',
    fontSize: scale(18),
  },
  input: {
    backgroundColor: '#393e78',
    borderRadius: scale(25),
    borderWidth: scale(2),
    borderColor: '#5b53d7',
    fontSize: scale(18),
    paddingHorizontal: scale(30),
    color: '#c2bafa',
  },
});
