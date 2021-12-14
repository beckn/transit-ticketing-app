import React, { useState, useEffect, ReactElement } from "react";
import { Text, View, StyleSheet, Button, Dimensions
  // , TouchableOpacity 
  , SafeAreaView
} from "react-native";
import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";
// import BarcodeMask from "react-native-barcode-mask";
// import { Entypo, FontAwesome } from '@expo/vector-icons';
// import { colors } from "../../../assets/theme/colors";

const finderWidth = 280;
const finderHeight = 230;
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const viewMinX = (width - finderWidth) / 2;
const viewMinY = (height - finderHeight) / 2;

export default function QRScanner() :ReactElement {
  const [ hasPermission, setHasPermission ] = useState(false);
  const [ type, setType ] = useState(BarCodeScanner.Constants.Type.back);
  const [ scanned, setScanned ] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  // const handleBarCodeScanned = ({ type, data }: any) => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleBarCodeScanned = ( scanningResult: BarCodeScannerResult ) => {
    if (!scanned) {
      const { type, data, bounds: { origin } = {} } = scanningResult;
      if(origin){
        const { x, y } = origin;
        if (x >= viewMinX && y >= viewMinY && x <= (viewMinX + finderWidth / 2) && y <= (viewMinY + finderHeight / 2)) {
          setScanned(true);
          alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        }
      }
    }
    // setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    // alert(`Bar code with type ${scanningResult} and data has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          type={type}
          barCodeTypes={[ BarCodeScanner.Constants.BarCodeType.qr ]}
          style={[ StyleSheet.absoluteFillObject, styles.container ]}
        >
          {/* <BarcodeMask 
            width={280}
            height={280}
            edgeBorderWidth={15} 
            edgeRadius={25} 
            edgeWidth={80} 
            edgeHeight={70} 
            edgeColor="#FFF" 
            animatedLineColor={"#F8A388"}
            animatedLineHeight={8}
            animatedLineWidth={"110%"}
            // onLayoutMeasured={onLayoutMeasuredHandler}
            showAnimatedLine
          /> */}
        </BarCodeScanner>
        {scanned && <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 25
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
});
// TouchContainer: {
//   marginTop: height * 0.5, 
//   alignItems: "center"
// },
// touchable: {
//   marginTop: 15,
//   paddingVertical: 15,
//   paddingHorizontal: 16,
//   borderRadius: 5000,
//   backgroundColor: colors.White
// }
// touchableContainer: {
//   flex: 1,
//   backgroundColor: colors.Transparent,
//   flexDirection: "row"
// },
// touchable: {
//   flex: 1,
//   alignItems: "flex-end"
// },
// FlipText: {
//   fontSize: 18,
//   margin: 5,
//   color: colors.White
// }
// title: {
//   fontSize: 20,
//   fontWeight: "bold"
// }