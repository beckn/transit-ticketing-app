import React, { ReactElement } from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../../assets/theme/colors";
import { FareBreakUp } from "../../utils/util";

const Divider = (): ReactElement => {
  return (
    <View style={styles.dividerWrapper}>
      <View style={styles.divider}></View>
    </View>
  );
};

export const FareDetails: React.FC<{ fareBreakUp: FareBreakUp }> = ({ fareBreakUp }): ReactElement => {
  return (
    <View style={styles.container}>
      <View style={[ styles.flexHorizontal, styles.justifyBetween ]}>
        <View style={styles.columnLeft}>
          <Text style={[ styles.label, styles.fontBold ]}>{fareBreakUp.amount.label}</Text>
          <Text style={[ styles.label, styles.fontBold ]}>{fareBreakUp.passengerCount.label}</Text>
          <Text style={styles.label}>{fareBreakUp.base.label}</Text>
          <Text style={styles.label}>{fareBreakUp.sgst.label}</Text>
          <Text style={styles.label}>{fareBreakUp.cgst.label}</Text>
        </View>
        <View style={styles.columnRight}>
          <Text style={[ styles.label, styles.fontBold ]}>{fareBreakUp.amount.value}</Text>
          <Text style={[ styles.label, styles.fontBold ]}>{fareBreakUp.passengerCount.value}</Text>
          <Text style={styles.label}>{fareBreakUp.base.value}</Text>
          <Text style={styles.label}>{fareBreakUp.sgst.value}</Text>
          <Text style={styles.label}>{fareBreakUp.cgst.value}</Text>
        </View>
      </View>
      <Divider />
      <View style={[ styles.totalFare, styles.flexHorizontal, styles.justifyBetween ]}>
        <Text style={[ styles.label, styles.fontBold ]}>{fareBreakUp.totalPrice.label}</Text>
        <Text style={[ styles.label, styles.fontBold ]}>{fareBreakUp.totalPrice.value}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 330
  },
  flexHorizontal: {
    display: "flex",
    flexDirection: "row"
  },
  justifyBetween: {
    justifyContent: "space-between"
  },
  columnRight: {
    display: "flex",
    alignItems: "flex-end"
  },
  columnLeft: {
    marginLeft: 3
  },
  label: {
    fontSize: 12,
    lineHeight: 18,
    color: colors.GreyBlack,
    marginBottom: 8
  },
  fontBold: {
    fontWeight: "bold"
  },
  totalFare: {
    marginTop: 4
  },
  dividerWrapper: {
    display: "flex",
    flexDirection: "row"
  },
  divider: {
    width: "100%",
    height: 2,
    backgroundColor: colors.Dim_Black
  }
});