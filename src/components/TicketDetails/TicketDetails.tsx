import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import { colors } from "../../../assets/theme/colors";
import OriginToDestinationIcon from "../OriginToDestinationIcon/OriginToDestinationIcon";
import WatchIcon from "../../../assets/svg/Watch";
import Passengers from "../../../assets/svg/Passengers";

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
  return (
    <View style={styles.card}>
      <Text style={styles.detailsHeader}>Ticket details</Text>

      <View style={styles.flexRow}>
        <View style={styles.originToDestImg}>
          <OriginToDestinationIcon />
        </View>

        <View style={[ styles.flexRow, styles.detailsMain ]}>
          <View>
            <View style={styles.infoSection}>
              <Text style={styles.detailsTitle}>Origin</Text>
              <Text style={styles.boldText}>{origin}</Text>
            </View>

            <View>
              <Text style={styles.detailsTitle}>Destination</Text>
              <Text style={styles.boldText}>{destination}</Text>
            </View>
          </View>

          <View>
            <View style={[ styles.flexRow, styles.infoSection ]}>
              <View style={styles.imageHolder}>
                <WatchIcon />
              </View>
              <View>
                <Text style={styles.detailsTitle}>Time</Text>
                <Text style={styles.boldText}>{selectedSlot}</Text>
              </View>
            </View>
          
            <View style={styles.flexRow}>
              <View style={styles.imageHolder}>
                <Passengers />
              </View>
              <View>
                <Text style={styles.detailsTitle}>Number of Passengers</Text>
                <Text style={styles.boldText}>{totalPassengers}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
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
    fontWeight: "600",
    lineHeight: 22,
    color: colors.GreyBlack
  },
  infoSection: {
    paddingBottom: 20
  },
  detailsMain: {
    justifyContent: "space-between",
    flexGrow: 1
  },
  imageHolder: {
    alignSelf: "center",
    paddingHorizontal: 6
  },
  boldText: {
    fontWeight: "500",
    lineHeight: 17
  },
  detailsTitle: {
    fontSize: 10,
    lineHeight: 12,
    color: colors.GreyBlack
  },
  originToDestImg: {
    alignSelf: "center",
    marginRight: 6
  }
});

export default TicketDetails;
