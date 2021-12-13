import React, { ReactElement } from "react";
import { 
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/Button/Button";
import TicketDetails from "../../components/TicketDetails/TicketDetails";
import { clearBlockTicketResponse } from "../../store/actions/blockTicketAction";
import { clearStationsLinkedToOrigin, clearStationsList } from "../../store/actions/linkedStationAction";
import { clearDestinationStation, clearOriginStation } from "../../store/actions/stationsAction";
import { clearTrip } from "../../store/actions/tripsAction";
import { State } from "../../store/reducers/reducer";
import { appendAM_PM } from "../../utils/util";

const ConfirmationBox = (): ReactElement => {
  return (
    <View>
      <View style={styles.confirmationIconWrapper}>
        <Image style={styles.confirmationIcon} source={require("../../../assets/icons/ticket-confirm.png")} />
      </View>
      <Text style={styles.confirmationTxt}>Your booking is confirmed.</Text>
    </View>
  );
};

const BookingConfirmation:React.FC<{
  navigation: NavigationScreenProp<any,any>   // eslint-disable-line @typescript-eslint/no-explicit-any
}> = ({ navigation }): ReactElement => {

  const dispatch = useDispatch();
  const onPress = (navigation: NavigationScreenProp<any,any> ):void => {
    dispatch(clearBlockTicketResponse());
    dispatch(clearTrip());
    dispatch(clearStationsLinkedToOrigin());
    dispatch(clearStationsList());
    dispatch(clearDestinationStation());
    dispatch(clearOriginStation());
    navigation.navigate("Ticket");
  };
  
  const { selected_slot, seats } = useSelector((state: State) => state.clientBookTicketResponse.trip);
  const selectedSlot = appendAM_PM(selected_slot);
  const source = useSelector((state: State) => state.originStation.name);
  const destination = useSelector((state: State) => state.destinationStation.name);
  return (
    <View style={[ styles.flexColumn, styles.container ]}>
      <View style={styles.mainContent}>
        <ConfirmationBox />
        <View style={[ styles.flexRow, styles.ticketDetailsWrapper ]}>
          <TicketDetails
            origin={source}
            destination={destination}
            selectedSlot={selectedSlot}
            totalPassengers={seats}
          />
        </View>
      </View>
      <View style={[ styles.createTicketBtn, styles.flexRow ]}>
        <Button label="CREATE NEW TICKET" onPress={() => onPress(navigation)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    display: "flex",
    flexDirection: "row"
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column"
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginHorizontal: 15
  },
  mainContent: {
    flexGrow: 1
  },
  confirmationIconWrapper: {
    alignItems: "center",
    paddingTop: 60
  },
  confirmationIcon: {
    width: 86,
    height: 86
  },
  confirmationTxt: {
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 30
  },
  createTicketBtn: {
    marginVertical: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  ticketDetailsWrapper: {
    justifyContent: "center"
  }
});

export default BookingConfirmation;
