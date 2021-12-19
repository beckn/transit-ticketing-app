import React, { ReactElement, useState } from "react";
import { 
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { useDispatch } from "react-redux";
import { Button } from "../../components/Button/Button";
import TicketDetails from "../../components/TicketDetails/TicketDetails";
import { clearBlockTicketResponse } from "../../store/actions/blockTicketAction";
import { clearStationsLinkedToOrigin } from "../../store/actions/linkedStationAction";
import { clearDestinationStation, clearOriginStation } from "../../store/actions/stationsAction";
import { clearTrip } from "../../store/actions/tripsAction";
import { colors } from "../../../assets/theme/colors";

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

const RejectionBox = (): ReactElement => {
  return (
    <View>
      <View style={styles.confirmationIconWrapper}>
        <Image style={styles.confirmationIcon} source={require("../../../assets/icons/RejectTicket.png")} />
      </View>
      <Text style={styles.confirmationTxt}>Your ticket is not valid.</Text>
    </View>
  );
};

export const ValidateTicketResult:React.FC<{
  navigation: NavigationScreenProp<any,any>   // eslint-disable-line @typescript-eslint/no-explicit-any
}> = ({ navigation }): ReactElement => {

  const dispatch = useDispatch();
  const onPress = (navigation: NavigationScreenProp<any,any> ):void => {
    dispatch(clearBlockTicketResponse());
    dispatch(clearTrip());
    dispatch(clearStationsLinkedToOrigin());
    dispatch(clearDestinationStation());
    dispatch(clearOriginStation());
    navigation.navigate("ValidateTicket");
  };
  
  const seats = 3;
  const selectedSlot = "10:00 am";
  const source = "Edathua";
  const destination = "Nedumudy";
  const initalFareDetail = { label: "Fare per person", value: "₹ 10.00 " };
  const initalPassengerDetail = { label: "Quantity", value: "03" };
  const initalTotalDetail = { label: "Total Fare", value: "₹ 30.00 " };
  const [ fareBreakUp ] = useState({
    totalAmount: initalTotalDetail,
    passengerCount: initalPassengerDetail,
    amount: initalFareDetail

  });
  const [ confirmStatus ] = useState(true);
  return (
    <View style={[ styles.flexColumn, styles.container ]}>
      <View style={styles.mainContent}>
        {confirmStatus ? 
          <ConfirmationBox />:
          <RejectionBox />
        }

        {confirmStatus && (
          <>
            <View style={[ styles.flexRow, styles.ticketDetailsWrapper ]}>
              <TicketDetails
                origin={source}
                destination={destination}
                selectedSlot={selectedSlot}
                totalPassengers={seats}
              />
            </View>
            <View style={[ styles.flexRow, styles.ticketDetailsWrapper ]}>
              <View style={styles.card}>
                <Text style={[ styles.detailsHeader, styles.boldText ]}>Fare details</Text>
                
                <View style={[ styles.flexRow, styles.justifyContentBetween ]}>
                  <Text style={styles.detailsHeader}> {fareBreakUp.amount.label} </Text>
                  <Text style={styles.detailsHeader}>{fareBreakUp.amount.value}</Text>
                </View>

                <View style={[ styles.flexRow, styles.justifyContentBetween ]}>
                  <Text style={styles.detailsHeader}> {fareBreakUp.passengerCount.label} </Text>
                  <Text style={styles.detailsHeader}>{fareBreakUp.passengerCount.value}</Text>
                </View>

                <View style={[ styles.flexRow, styles.justifyContentBetween ]}>
                  <Text style={[ styles.detailsHeader, styles.boldText ]}> {fareBreakUp.totalAmount.label} </Text>
                  <Text style={[ styles.detailsHeader, styles.boldText ]}>{fareBreakUp.totalAmount.value}</Text>
                </View>
              </View>
            </View>
          </>  
        )}
      </View>
      
      <View style={[ styles.createTicketBtn, styles.flexRow ]}>
        <Button isTansparent={!confirmStatus} label="Scan Another Ticket" onPress={() => onPress(navigation)} />
      </View>

      {!confirmStatus && (
        <View style={[ styles.createTicketBtn, styles.flexRow ]}>
          <Button label="Book another TICKET" onPress={() => onPress(navigation)} />
        </View>
      )}
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
  justifyContentBetween: {
    justifyContent: "space-between"
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
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  ticketDetailsWrapper: {
    justifyContent: "center"
  },
  card: {
    width: "100%",
    maxWidth: 330,
    borderRadius: 16,
    paddingHorizontal: 15,
    marginTop: 20,
    paddingVertical: 20,
    elevation: 5,
    shadowColor: colors.Black,
    backgroundColor: colors.White
  },
  detailsHeader: {
    paddingBottom: 10,
    fontWeight: "600",
    lineHeight: 22,
    color: colors.GreyBlack
  },
  boldText: {
    fontWeight: "500",
    fontFamily: "Inter"
  }
});

