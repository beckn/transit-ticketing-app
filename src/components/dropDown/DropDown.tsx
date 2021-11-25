import React, { ReactElement, useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import Modal from "react-native-modal";
import Icon from "../OriginToDestinationIcon/originToDestinationIcon";
import * as Font from "expo-font";
import { colors } from "../../../assets/theme/colors";


const selectLocation = (location: string, placeholder: string): ReactElement => {
  return (
    <>
      <Text style={styles.placeholder}>{location ? placeholder : location}</Text>
      <Text style={styles.text}>{location ? location : placeholder}</Text>
      <Image style={styles.arrow} source={require("../../../assets/icons/arrow.png")} />
    </>
  );
};

const DropDown = (): ReactElement => {
  const modalContent = (): ReactElement => {
    return (
      <TouchableOpacity
        onPress={() => {
          setModalVisibility(!modalVisibility);
          setOriginLocation("Alaska");
          setDestinationLocation("Manhattan");
        }}>
        <Text>Close</Text>
      </TouchableOpacity>
    );
  };

  const [ modalVisibility, setModalVisibility ] = useState(false);
  const [ originLocation, setOriginLocation ] = useState("");
  const [ destinationLocation, setDestinationLocation ] = useState("");

  const customFonts = {
    "Inter-ExtraBold": require("../../../assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-SemiBoldItalic": require("../../../assets/fonts/Inter-SemiBoldItalic.ttf")
  };

  const ORIGIN_PLACEHOLDER = "Select Origin Station";
  const DESTINATION_PLACEHOLER = "Select Destination Station";

  Font.loadAsync(customFonts).then(() => {
    styles.text.fontFamily = "Inter-SemiBoldItalic";
  });

  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <View style={styles.lineStyle} />
      <View style={styles.origin} onTouchStart={() => setModalVisibility(true)}>
        {selectLocation(originLocation, ORIGIN_PLACEHOLDER)}
      </View>
      <View style={styles.destination} onTouchStart={() => setModalVisibility(true)}>
        {selectLocation(destinationLocation, DESTINATION_PLACEHOLER)}
      </View>
      <View style={styles.icon}><Icon /></View>
      <Modal
        style={styles.modal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        isVisible={modalVisibility}
        backdropTransitionInTiming={1000}
        backdropOpacity={0.5}
        hideModalContentWhileAnimating={true}
        onBackdropPress={() => setModalVisibility(false)}
      >
        {modalContent()}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 300,
    height: 105
  },
  lineStyle: {
    position: "absolute",
    borderWidth: 0.5,
    width: 250,
    borderColor: colors.Dim_Black,
    marginVertical: 50,
    left: 50
  },
  box: {
    position: "absolute",
    height: 100,
    width: 300,
    borderWidth: 1,
    borderColor: colors.Dim_Black,
    borderStyle: "solid",
    borderRadius: 10
  },
  modal: {
    marginHorizontal: 0,
    marginBottom: 0,
    marginTop: "15%",
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    backgroundColor: colors.White
  },
  icon: {
    position: "absolute",
    left: 15,
    top: 17
  },
  origin: {
    justifyContent: "center",
    top: 10
  },
  destination: {
    justifyContent: "center",
    top: 25
  },
  text: {
    left: 50,
    width: "70%",
    color: colors.Black,
    fontWeight: "600",
    fontStyle: "normal",
    fontFamily: "",
    fontSize: 14
  },
  arrow: {
    position: "absolute",
    marginVertical: 10,
    left: 270
  },
  placeholder: {
    fontSize: 10,
    color: colors.Black,
    marginHorizontal: 50
  }
});

export default DropDown;
