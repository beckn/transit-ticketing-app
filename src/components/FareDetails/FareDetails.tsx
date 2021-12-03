import React, { ReactElement } from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../../assets/theme/colors";
import { FareBreakUp } from "../../utils/util";

export const FareDetails: React.FC<{ fareBreakUp: FareBreakUp }> = ({ fareBreakUp }): ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.columnLeft}>
        <Text style={[ styles.label, styles.fontWeightNormal ]}>{fareBreakUp.amount.label}</Text>
        <Text style={[ styles.label, styles.fontWeightNormal ]}>{fareBreakUp.passengerCount.label}</Text>
        <Text style={[ styles.label, styles.fontWeightNormal ]}>{fareBreakUp.base.label}</Text>
        <Text style={[ styles.label, styles.fontWeightNormal ]}>{fareBreakUp.sgst.label}</Text>
        <Text style={[ styles.label, styles.fontWeightNormal ]}>{fareBreakUp.cgst.label}</Text>
        <Text style={[ styles.label, styles.fontWeightNormal ]}>{fareBreakUp.totalPrice.label}</Text>
      </View>
      <View style={styles.columnRight}>
        <Text style={[ styles.label, styles.fontWeightBold ]}>{fareBreakUp.amount.value}</Text>
        <Text style={[ styles.label, styles.fontWeightBold ]}>{fareBreakUp.passengerCount.value}</Text>
        <Text style={[ styles.label, styles.fontWeightBold ]}>{fareBreakUp.base.value}</Text>
        <Text style={[ styles.label, styles.fontWeightBold ]}>{fareBreakUp.sgst.value}</Text>
        <Text style={[ styles.label, styles.fontWeightBold ]}>{fareBreakUp.cgst.value}</Text>
        <Text style={[ styles.label, styles.fontWeightBold ]}>{fareBreakUp.totalPrice.value}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 330,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  columnRight: {
    display: "flex",
    alignItems: "flex-end"
  },
  columnLeft: {
    display: "flex"
  },
  label: {
    fontSize: 12,
    lineHeight: 18,
    color: colors.GreyBlack
  },
  fontWeightNormal: {
    fontWeight: "normal"
  },
  fontWeightBold: {
    fontWeight: "400"
  }
});