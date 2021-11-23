import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import Modal from 'react-native-modal';
import Icon from './Icon';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import * as Font from 'expo-font';


const DropDown = () => {
  const [modalVisibility, setModalVisibility] = useState(false);

  let customFonts = {
    'Inter-ExtraBold': require('../../assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-SemiBoldItalic': require('../../assets/fonts/Inter-SemiBoldItalic.ttf')
  };

  Font.loadAsync(customFonts).then(r => {
    styles.textOrigin.fontFamily = 'Inter-SemiBoldItalic';
  });

  const ORIGIN = 'Select Origin Station';
  const DESTINATION = 'Select Destination Station';
  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <View style={styles.lineStyle} />
      <View style={styles.origin} onTouchStart={() => setModalVisibility(true)}>
        <TextInput style={styles.textOrigin} placeholder={ORIGIN} placeholderTextColor={'#3E4059'} />
        <Image style={styles.arrowTop} source={require('../../assets/icons/arrow.png')} />
      </View>
      <View style={styles.destination} onTouchStart={() => setModalVisibility(true)}>
        <TextInput style={styles.textDestination} placeholder={DESTINATION} placeholderTextColor={'#3E4059'} />
        <Image style={styles.arrowBottom} source={require('../../assets/icons/arrow.png')} />
      </View>
      <View style={styles.icon}><Icon /></View>
      <Modal
        animationIn='slideInUp'
        animationOut='slideOutDown'
        isVisible={modalVisibility}
        backdropTransitionInTiming={1000}
        backdropColor='white'
        onBackdropPress={() => setModalVisibility(false)}
      >
        <View
          style={{
            height: '90%',
            marginTop: 'auto',
            borderTopEndRadius: 30,
            borderTopStartRadius: 30

          }}>
          <TouchableOpacity
            onPress={() => {
              setModalVisibility(!modalVisibility);
            }}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>

  );
};

// const lsit = new SectionList("Garima", "Mittal");

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 300,
    height: 100,
  },
  lineStyle: {
    position: 'absolute',
    borderWidth: 0.5,
    width: 250,
    borderColor: '#424242',
    top: 50,
    left: 50
  },
  box: {
    position: 'absolute',
    height: 100,
    width: 300,
    borderWidth: 1,
    borderColor: '#424242',
    borderStyle: 'solid',
    borderRadius: 10
  },
  icon: {
    position: 'absolute',
    left: 15,
    top: 17
  },
  origin: {
    top: 15
  },
  textOrigin: {
    left: 50,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: '',
    fontSize: 14,
    lineHeight: 22
  },
  textDestination: {
    left: 50,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: '',
    fontSize: 14,
    lineHeight: 22
  },
  destination: {
    top: 40
  },
  arrowTop: {
    position: 'absolute',
    top: 10,
    left: 270
  },
  arrowBottom: {
    position: 'absolute',
    top: 10,
    left: 270
  }
});

export default DropDown;
