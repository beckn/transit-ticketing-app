import React, { ReactElement, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../assets/theme/colors";
import DropDown from "../../components/DropDown/DropDown";
import { FareDetails } from "../../components/FareDetails/FareDetails";
import { SmallCard } from "../../components/SmallCard/SmallCard";
import { Stepper } from "../../components/Stepper/stepper";
import { BlockTicketRequest } from "../../request/blockTicketRequest";
import { stationService } from "../../services/stationService";
import { setBlockTicket } from "../../store/actions/blockTicketAction";
import { State } from "../../store/reducers/reducer";
import { fareBreakUpGenerator, fetchFirstAvailableSlot } from "../../utils/util";
import { NavigationScreenProp } from "react-navigation";

export const Ticket:React.FC<{
  navigation: NavigationScreenProp<any,any>   // eslint-disable-line @typescript-eslint/no-explicit-any
}> = ({ navigation }): ReactElement =>  {
  const label = "Number of passengers";
  const buttonLabel = "CREATE TICKET";
  const availableSeatsLabel = "Available Seats: ";
  const fareDetailsLabel = "Fare Details";
  const tripDetails = useSelector((state: State) => state.trip);
  const dispatch = useDispatch();
  const initalFareDetail = { label: "", value: "" };
  const [ hideTripDetails, setHideTripDetails ] = useState(true);
  const [ availableSlotTime, setAvailableSlotTime ] = useState("");
  const [ totalAvailableSeats, setTotalAvailableSeats ] = useState(0);
  const [ tripId, setTripId ] = useState("");
  const [ hideFareDetails, setHideFairDetails ] = useState(true);
  const [ fareBreakUp, setFareBreakUp ] = useState({
    totalPrice: initalFareDetail,
    passengerCount: initalFareDetail,
    currency: "",
    base: initalFareDetail,
    cgst: initalFareDetail,
    sgst: initalFareDetail,
    amount: initalFareDetail

  });
  let passengerCount = 0;
  useEffect(() => {
    if (tripDetails.availability.length === 0) {
      setHideTripDetails(true);
      setHideFairDetails(true);
      return;
    } 
    else {
      const result = fetchFirstAvailableSlot(tripDetails.availability);
      if (result) {
        setAvailableSlotTime(result.slot);
        setTotalAvailableSeats(result.seats);
        setTripId(result.trip_id);
      }
      setHideTripDetails(false);
    }
  }, [ tripDetails.availability.length ]);
  const passenger = (value: number): void => {
    if (value !== 0)
      passengerCount = value;
    passengerCount === 0 &&  setHideFairDetails(true);
  };
  const blockTicket = (): void => {
    const blockTicketReq: BlockTicketRequest = {
      source: tripDetails.trip.source,
      destination: tripDetails.trip.destination,
      date: tripDetails.trip.date,
      slot: availableSlotTime,
      seats: passengerCount,
      trip_id: tripId
    };

    passengerCount > 0 && stationService.blockTicket(blockTicketReq).then((res) => {
      dispatch(setBlockTicket(res));
      setFareBreakUp(fareBreakUpGenerator(res.fare, res.trip.seats));
      setHideFairDetails(false);
    });
  };

  return (
    <View>
      <Text style={styles.welcomeMessage}>Welcome Gopal Iyer,</Text>
      <View style={styles.dropDown}>
        <DropDown></DropDown>
      </View>
      {!hideTripDetails &&
        <View style={styles.tripDetailsContainer}>
          <View style={styles.tripDetails}>
            <SmallCard suffix="Available time slot"
              icon={require("../../../assets/icons/watch.png")}
              label={availableSlotTime}>
            </SmallCard>
            <Stepper bubbleUpValue={passenger}
              icon={require("../../../assets/icons/passenger.png")}
              label={label}
              maxLimit={totalAvailableSeats}>
            </Stepper>
          </View>
          <Text style={styles.availableSeats}>{availableSeatsLabel + totalAvailableSeats}</Text>
          <TouchableOpacity
            style={styles.fareLabel}
            onPress={blockTicket}
          >
            <Text style={styles.availableSeats}>{fareDetailsLabel}</Text>
          </TouchableOpacity>
          {!hideFareDetails && <View style={styles.fareDetails}>
            <FareDetails fareBreakUp={fareBreakUp}></FareDetails>
          </View>}

          <TouchableOpacity
            onPress={() => passengerCount > 0 && !hideFareDetails && navigation.navigate("BookingConfirmation")}
            style={[ styles.ticketButton, hideFareDetails ? styles.marginVerticalLarge : styles.marginVerticalSmall ]}
          >
            <Text style={styles.ticketButtonText}>{buttonLabel}</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  tripDetailsContainer: {
    position: "relative",
    height: 450
  },
  welcomeMessage: {
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 22,
    color: colors.GreyBlack,
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 20
  },
  dropDown: {
    display: "flex",
    alignItems: "center"
  },
  tripDetails: {
    position: "relative",
    marginTop: 20,
    display: "flex",
    alignItems: "center"
  },
  availableSeats: {
    marginLeft: 30,
    lineHeight: 15,
    color: colors.GreyBlack
  },
  fareLabel:{
    fontWeight: "bold",
    marginTop: 18,
    fontFamily:"Inter"
  },
  fareDetails: {
    display: "flex",
    alignItems: "center",
    marginTop: 14
  },

  ticketButton: {
    width: 350,
    backgroundColor: colors.GreyBlack,
    borderRadius: 14,
    paddingVertical: 13,
    alignItems: "center",
    alignSelf: "center",
    position: "relative"
  },
  marginVerticalLarge: {
    marginVertical: 200
  },
  marginVerticalSmall: {
    marginVertical: 74
  },
  ticketButtonText: {
    color: colors.White,
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 2
  }
});
