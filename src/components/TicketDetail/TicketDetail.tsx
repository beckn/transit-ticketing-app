import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle
} from "react-native";
import { colors } from "../../../assets/theme/colors";
import OriginToDestinationIcon from "../OriginToDestinationIcon/OriginToDestinationIcon";
import WatchIcon from "../../../assets/svg/Watch";
import Passenger from "../../../assets/svg/Passengers";

export interface TicketDetailsProps {
  origin: string;
  destination: string;
  selectedSlot: string;
  totalPassengers: number;
}

const TicketDetails: React.FC<TicketDetailsProps> = ({
  origin,
  destination,
  selectedSlot,
  totalPassengers
}: TicketDetailsProps) => {
  const numberOfPassengers = "Number of Passengers";
  const time = "Time";
  const originLabel = "Origin";
  const destinationLabel = "Destination";
  const ticketDetailsLabel = "Ticket details";
  return (
    <View style={styles.card}>
      <Text style={styles.detailsHeader}>{ticketDetailsLabel}</Text>
      <OriginToDestinationIcon style={styles.originToDestIcon}></OriginToDestinationIcon>
      <View style={[ styles.flexRow, styles.detailsMain ]}>
        <View>
          <TripDetailsSection style={styles.infoSection} title={originLabel} info={origin}></TripDetailsSection>
          <TripDetailsSection title={destinationLabel} info={destination}></TripDetailsSection>
        </View>
        <View>
          <View style={[ styles.flexRow, styles.infoSection ]}>
            <View style={styles.imageHolder}>
              <WatchIcon />
            </View>
            <TripDetailsSection title={time} info={selectedSlot}></TripDetailsSection>
          </View>
          <View style={styles.flexRow}>
            <Passenger/>
            <TripDetailsSection title={numberOfPassengers} info={totalPassengers}></TripDetailsSection>
          </View>
        </View>
      </View>
    </View>
  );
};

const TripDetailsSection: React.FC<{title: string, info:string | number, style?: StyleProp<ViewStyle>}> = ({ title,info,style }) => {
  return(
    <View style={style}>
      <Text style={styles.detailsTitle}>{title}</Text>
      <Text style={styles.boldText}>{info}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  flexRow: {
    display: "flex",
    flexDirection: "row"
  },
  card: {
    width: "100%",
    maxWidth: 330,
    borderRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 20,
    elevation: 5,
    shadowColor: colors.Black,
    backgroundColor: colors.White
  },
  detailsHeader: {
    paddingBottom: 10,
    lineHeight: 22,
    color: colors.Grey_Black
  },
  infoSection: {
    paddingBottom: 20
  },
  detailsMain: {
    justifyContent: "space-around",
    flexGrow: 1
  },
  imageHolder: {
    alignSelf: "center",
    marginHorizontal: 10
  },
  boldText: {
    fontWeight: "500",
    lineHeight: 17
  },
  detailsTitle: {
    fontSize: 10,
    lineHeight: 12,
    color: colors.Grey_Black
  },
  originToDestIcon: {
    position: "absolute",
    top: "50%",
    marginHorizontal: 15
  }
});

export default TicketDetails;
