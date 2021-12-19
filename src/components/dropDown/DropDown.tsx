import React, { ReactElement, useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, ImageProps } from "react-native";
import Modal from "react-native-modal";
import OriginToDestinationIcon from "../OriginToDestinationIcon/OriginToDestinationIcon";
import * as Font from "expo-font";
import { colors } from "../../../assets/theme/colors";
import { List } from "../List/List";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store/reducers/reducer";
import { setOriginStation, setDestinationStation } from "../../store/actions/stationsAction";
import { stationService } from "../../services/stationService";
import { setStationsLinkedToOrigin } from "../../store/actions/linkedStationAction";
import { Station } from "../../response/searchStationsResponse";
import { setTrip } from "../../store/actions/tripsAction";
import RightArrow from "../../../assets/svg/RightArrow";

const selectLocation = (location: string, placeholder: string): ReactElement => {
  return (
    <View style={[ styles.flexRow, styles.locationHolderWidth, styles.justifyBetween ]}>
      <View style={[ styles.flexColumn, styles.left30, styles.paddingVertical ]}>
        <Text style={styles.placeholder}>{location ? placeholder : location}</Text>
        <Text style={styles.text}>{location ? location : placeholder}</Text>
      </View>
      <RightArrow style={styles.arrow} />
    </View>
  );
};

const DropDown = (): ReactElement => {
  const originStation = useSelector((state: State) => state.originStation);
  const destinationStation = useSelector((state: State) => state.destinationStation);
  const stationlist = useSelector((state: State) => state.stations);
  const [ location, setLocation ] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (originStation.id === "") return;
    stationService.searchStations(originStation.id).then((data) => {
      dispatch(setStationsLinkedToOrigin(data));
    });
  }, [ originStation.id ]);

  useEffect(() => {
    if (destinationStation.id === "") return;
    stationService.searchTrips({ origin: originStation.id, destination: destinationStation.id }).then((data) => {
      dispatch(setTrip(data));
    });
  }, [ destinationStation.id ]);

  const isLocationIsOrigin = (): boolean => {
    return location === "origin";
  };
  const isLocationIsDestination = (): boolean => {
    return location === "destination";
  };

  const isLocationEmpty = (): boolean => {     
    return location === "";
  };
  const ModalContent = (): ReactElement => {
    let list: Station[] = [];
    const label = !isLocationEmpty() && isLocationIsOrigin() ? ORIGIN_PLACEHOLDER : DESTINATION_PLACEHOLER;
    const action = !isLocationEmpty() && isLocationIsOrigin() ? setOriginStation : setDestinationStation;
    const dispatchAction = (selectedValue: {id: string, name: string}):void => { 
      dispatch(action(selectedValue));
      setModalVisibility(false);
    };
    if(isLocationEmpty()) {
      list = [];
    }
    else {
      list = isLocationIsDestination() ? useSelector((state: State) => state.linkedStationsToOrigin) : stationlist;
    }
    
    return (
      <View style={styles.modalContent}>
        <ListHeader label={label} icon={require("../../../assets/icons/cross.png")}></ListHeader>
        <View style={styles.list}>
          <List list={list} bubbleUpValue={dispatchAction} ></List>
        </View>
      </View>
    );
  };

  const ListHeader: React.FC<{ label: string, icon: ImageProps }> = ({ label, icon }) => {
    return (
      <View style={styles.header}>
        <Text style={[ styles.headerText ]}>{label}</Text>
        <View style={styles.headerIcon} onTouchEnd={() => setModalVisibility(!modalVisibility)}>
          <Image source={icon}></Image>
        </View>
      </View>
    );
  };
  const [ modalVisibility, setModalVisibility ] = useState(false);
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
    <><View style={[ styles.container, styles.box, styles.paddingHorizontalVertical ]}>
      <View onTouchStart={() => { setModalVisibility(true); setLocation("origin"); }}>
        {selectLocation(originStation.name, ORIGIN_PLACEHOLDER)}
      </View>
      <View style={styles.lineStyle} />
      <View onTouchStart={() => { setModalVisibility(true); setLocation("destination"); }}>
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
  justifyBetween: {
    display: "flex",
    justifyContent: "space-between"
  },
  locationHolderWidth: {
    width: 300
  },
  paddingVertical: {
    paddingVertical: 10
  },
  paddingHorizontalVertical:{
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  container: {
    width: "100%",
    alignSelf: "center",
    alignContent: "center"
  },
  left30: {
    left:30
  },
  lineStyle: {
    borderWidth: 0.5,
    width: 270,
    left: 30,
    borderColor: colors.Dim_Black
  },
  box: {
    borderWidth: 1,
    borderColor: colors.Dim_Black,
    borderStyle: "solid",
    borderRadius: 10
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column"

  },
  flexRow: {
    display: "flex",
    flexDirection: "row"
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
    left: "5%",
    top: "25%"
  },
  text: {
    width: "100%",
    color: colors.Black,
    fontWeight: "600",
    fontStyle: "normal",
    fontFamily: "Inter-SemiBoldItalic",
    fontSize: 14
  },
  arrow: {
    position: "absolute",
    marginVertical: 20,
    left: 300,
    transform: [ { rotate: "90deg" } ]
  },
  placeholder: {
    fontSize: 10,
    color: colors.Black
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
