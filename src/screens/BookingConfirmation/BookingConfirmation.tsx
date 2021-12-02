import React, { ReactElement } from "react";
import { 
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";
import { Button } from "../../components/Button/Button";
import TicketDetails from "../../components/TicketDetails/TicketDetails";

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

// eslint-disable-next-line @typescript-eslint/no-empty-function
const onPress = (): void => {};

const BookingConfirmation: React.FC = (): ReactElement => {
  return(
    <View style={[ styles.flexColumn, styles.container ]}>
      <View style={styles.mainContent}>
        <ConfirmationBox />
        <View style={[ styles.flexRow, styles.ticketDetailsWrapper ]}>
          <TicketDetails origin="Edathua" destination="Nedumudy" timeSlot="10.00 am" totalPassengers={3} />
        </View>
      </View>
      <View style={[ styles.createTicketBtn, styles.flexRow ]}>
        <Button label="CREATE NEW TICKET" onPress={onPress} />
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
