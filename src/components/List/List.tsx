import React, { ReactElement, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { colors } from "../../../assets/theme/colors";
import { setOriginStation } from "../../store/actions/stationsAction";
import { Station } from "../../response/searchStationsResponse";

export const List: React.FC<{ list: Station[] }> = (props): ReactElement => {
  const dispatch = useDispatch();
  const [ selectedITem, setSelectedITem ] = useState("");
  useEffect(() => {
    if(selectedITem == "" ) return;
    dispatch(setOriginStation(selectedITem)); 
  },[ selectedITem ]);

  const Item: React.FC<{ item: Station }> = ({ item }): ReactElement => {
  
    return (
      <TouchableWithoutFeedback onPress={() => setSelectedITem(item.id) }>
        <Text style={styles.text}>{item.name}</Text>
      </TouchableWithoutFeedback>
    );
  };

  return (<View style={styles.container}>
    <FlatList data={props.list}
      renderItem={Item}
      keyExtractor={(item) => item.id}
      extraData={selectedITem}
      ItemSeparatorComponent={ListSeperator}>
    </FlatList>
  </View>);
};

const ListSeperator: React.FC<{ customWidth?: number }> = ({ customWidth }) => {
  return (<View style={[ styles.line, { width: customWidth ? customWidth : styles.line.width } ]}></View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10,
    marginLeft: 30,
    width: "100%"
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    color: colors.Black,
    fontWeight: "300"
  },
  line: {
    width: "85%",
    height: 1,
    marginVertical: 9,
    backgroundColor: colors.Dim_Grey
  }
});