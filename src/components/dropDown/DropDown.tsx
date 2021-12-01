import React, { ReactElement, useState } from "react";
import { StyleSheet, View, Image, Text, ImageProps } from "react-native";
import Modal from "react-native-modal";
import OriginToDestinationIcon from "../OriginToDestinationIcon/OriginToDestinationIcon";
import * as Font from "expo-font";
import { colors } from "../../../assets/theme/colors";
import { List } from "../List/List";
import { useSelector } from "react-redux";
import { State } from "../../store/reducers/reducer";
import { setOriginStation, setDestinationStation } from "../../store/actions/stationsAction";

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
  const originStation = useSelector((state: State) => state.originStation);
  const destinationStation = useSelector((state: State) => state.destinationStation);
  const stationlist = useSelector((state: State) => state.stations);
  const ModalContent = (): ReactElement => {
    const isLocationIsOrigin= (): boolean => {
      return location === "origin";
    };
   
    const label = isLocationIsOrigin()? ORIGIN_PLACEHOLDER : DESTINATION_PLACEHOLER;
    const action = isLocationIsOrigin() ? setOriginStation: setDestinationStation;

    return (
      <View style={styles.modalContent}>
        <ListHeader label={label} icon={require("../../../assets/icons/cross.png")}></ListHeader>
        <View style={styles.list}>
          <List action={action} list={stationlist} ></List>
        </View>
      </View>
    );
  };

  const ListHeader: React.FC<{ label: string, icon: ImageProps }> = ({ label, icon }) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{label}</Text>
        <View style={styles.headerIcon} onTouchEnd={() => setModalVisibility(!modalVisibility)}>
          <Image source={icon}></Image>
        </View>
      </View>
    );
  };
  const [ modalVisibility, setModalVisibility ] = useState(false);
  const [ location, setLocation ] = useState("");

  const customFonts = {
    "Inter-ExtraBold": require("../../../assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-SemiBoldItalic": require("../../../assets/fonts/Inter-SemiBoldItalic.ttf")
  };

  const ORIGIN_PLACEHOLDER = "Select origin station";
  const DESTINATION_PLACEHOLER = "Select destination station";

  Font.loadAsync(customFonts).then(() => {
    styles.text.fontFamily = "Inter-SemiBoldItalic";
  });

  return (
    <><View style={styles.container}>
      <View style={styles.box} />
      <View style={styles.lineStyle} />
      <View style={styles.origin} onTouchStart={() => { setModalVisibility(true); setLocation("origin"); }}>
        {selectLocation(originStation.name, ORIGIN_PLACEHOLDER)}
      </View>
      <View style={styles.destination} onTouchStart={() => { setModalVisibility(true); setLocation("destination"); }}>
        {selectLocation(destinationStation.name, DESTINATION_PLACEHOLER)}
      </View>
      <View style={styles.icon}><OriginToDestinationIcon /></View>
    </View>
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
      {<ModalContent></ModalContent>}
    </Modal></>
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
    fontFamily: "Inter-SemiBoldItalic",
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
  },
  header: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    left: "7%",
    width: "100%"
  },
  headerText: {
    color: colors.GreyBlack,
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 22,
    width: "45%",
    marginRight: "35%"
  },
  headerIcon: {
    width: 17,
    height: 17
  },
  list: {
    marginTop: "7%"
  },
  modalContent: {
    display: "flex",
    height: "100%",
    marginTop: "15%",
    flexDirection: "column"
  }
});

export default DropDown;
