import React, { ReactElement } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../../assets/theme/colors";
import { Station } from "../../types/stations";

// TODO---have to intergrate dispatch to update the origin and destination

export const List: React.FC<{list?: Station[]}> =(props): ReactElement => {
  return (<View style={styles.container}>
    <FlatList data={props.list} 
      renderItem={Item}
      keyExtractor={(item) => item.id} 
      ItemSeparatorComponent={ListSeperator}>
    </FlatList>
  </View>);
};
const Item: React.FC<{item:Station}> = ({ item }):ReactElement => {
   
  return (
    <TouchableOpacity key={item.id}>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>

  );
};
const ListSeperator: React.FC<{customWidth?:number}> = ({ customWidth }) => {
  return (<View style={[ styles.line, { width: customWidth? customWidth: styles.line.width } ]}></View>
  );
};

const styles = StyleSheet.create({
  container: {
    position:"absolute",
    top: 10,
    marginLeft: 30,
    width: "100%"
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    color: colors.Black,
    fontWeight:"300"
  },
  line: {
    width: "85%",
    height: 1,
    marginVertical:9,
    backgroundColor: colors.Dim_Grey
  }
});