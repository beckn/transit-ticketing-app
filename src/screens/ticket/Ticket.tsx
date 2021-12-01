import React, { ReactElement, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { colors } from "../../../assets/theme/colors";
import DropDown from "../../components/DropDown/DropDown";
import { SmallCard } from "../../components/SmallCard/SmallCard";
import { Stepper } from "../../components/Stepper/stepper";
import { State } from "../../store/reducers/reducer";
import { fetchFirstAvailableSlot } from "../../utils/util";

export const Ticket = (): ReactElement => {
  const label = "Number of passengers";
  const availableSeatsLabel = "Available Seats: ";
  const trip = useSelector((state: State) => state.trip);
  const [ hideTripDetails, setHideTripDetails ] = useState(true);
  const [ availableSlotTime, setAvailableSlotTime ] = useState("");
  const [ totalAvailableSeats, setTotalAvailableSeats ] = useState(0);
  useEffect(() => {
    if (!trip.availability.length) return;
    else {
      const result = fetchFirstAvailableSlot(trip.availability);
      if (result) {
        setAvailableSlotTime(result.slot);
        setTotalAvailableSeats(result.seats);
      }
      setHideTripDetails(false);
    }
  }, [ trip.availability ]);

  return (
    <>
      <Text style={styles.welcomeMessage}>Welcome Gopal Iyer,</Text>
      <View style={styles.dropDown}>
        <DropDown></DropDown>
      </View>
      {!hideTripDetails && 
      <><View style={styles.tripDetails}>
        <SmallCard suffix="Available time slot" icon={require("../../../assets/icons/watch.png")} label={availableSlotTime}></SmallCard>
        <Stepper icon={require("../../../assets/icons/passenger.png")} label={label} maxLimit={totalAvailableSeats}></Stepper>
      </View>
      <Text style={styles.availableSeats}>{availableSeatsLabel + totalAvailableSeats}</Text>
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
    marginLeft:20
  },
  dropDown: {
    display: "flex",
    alignItems: "center"
  },
  tripDetails: {
    marginTop:20,
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