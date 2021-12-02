import React, { ReactElement, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../assets/theme/colors";
import DropDown from "../../components/DropDown/DropDown";
import { SmallCard } from "../../components/SmallCard/SmallCard";
import { Stepper } from "../../components/Stepper/stepper";
import { BlockTicketRequest } from "../../request/blockTicketRequest";
import { stationService } from "../../services/stationService";
import { setBlockTicket } from "../../store/actions/blockTicketAction";
import { State } from "../../store/reducers/reducer";
import { fetchFirstAvailableSlot } from "../../utils/util";

export const Ticket = (): ReactElement => {
  const label = "Number of passengers";
  const availableSeatsLabel = "Available Seats: ";
  const tripDetails = useSelector((state: State) => state.trip);
  const dispatch = useDispatch();
  const [ hideTripDetails, setHideTripDetails ] = useState(true);
  const [ availableSlotTime, setAvailableSlotTime ] = useState("");
  const [ totalAvailableSeats, setTotalAvailableSeats ] = useState(0);
  const [ tripId, setTripId ] = useState("");

  let passengerCount = 0;
  useEffect(() => {
    if (!tripDetails.availability.length) return;
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

    stationService.blockTicket(blockTicketReq).then((res) => {
      dispatch(setBlockTicket(res));
    });
  };

  return (
    <>
      <Text style={styles.welcomeMessage}>Welcome Gopal Iyer,</Text>
      <View style={styles.dropDown}>
        <DropDown></DropDown>
      </View>
      {!hideTripDetails &&
        <><View style={styles.tripDetails}>
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
          onPress={blockTicket}
        >
          <Text> Show Fare </Text>
        </TouchableOpacity>
        </>
      }
    </>
  );
};

const styles = StyleSheet.create({
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
    marginTop: 20,
    display: "flex",
    alignItems: "center"
  },
  availableSeats: {
    marginLeft: 30,
    fontWeight: "500",
    lineHeight: 15,
    color: colors.GreyBlack
  }
});