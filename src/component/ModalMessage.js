import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

const ModalMessage = props => {
  const {modalMV, setModalMV, navigation} = props;
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalMV.Visible}
        onRequestClose={() => {
          setModalMV({
            Visible: !modalMV.Visible,
            Message: modalMV.Message,
            type: modalMV.type,
          });
          modalMV.type == 'verification' || 'Login'
            ? navigation.navigate('Login')
            : null;
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{modalMV.Message}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalMV({
                  Visible: !modalMV.Visible,
                  Message: modalMV.Message,
                });
                modalMV.type == 'verification' || 'Login'
                  ? navigation.navigate('Login')
                  : null;
              }}>
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalMessage;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: scale(20),
    backgroundColor: 'white',
    borderRadius: scale(20),
    padding: scale(20),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: scale(20),
    padding: scale(10),
    elevation: scale(2),
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: scale(13),
  },
  modalText: {
    marginBottom: scale(15),
    fontSize: scale(20),
    textAlign: 'center',
  },
});
