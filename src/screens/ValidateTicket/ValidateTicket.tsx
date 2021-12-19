import React, { useState, useEffect, ReactElement } from "react";
import { Text, View, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";
import BarcodeMask from "react-native-barcode-mask";
import { Camera } from "expo-camera";
import { colors } from "../../../assets/theme/colors";
import FlashOff from "../../../assets/svg/FlashOff";
import FlashOn from "../../../assets/svg/FlashOn";
import { NavigationScreenProp } from "react-navigation";

const width = Dimensions.get("window").width;

export const ValidateTicket: React.FC<{
  navigation: NavigationScreenProp<any, any>   // eslint-disable-line @typescript-eslint/no-explicit-any
}> = ({ navigation }) :ReactElement => {
  const [ hasPermission, setHasPermission ] = useState<boolean | null>(null);
  const [ flash, setFlash ] = useState(Camera.Constants.FlashMode.off);
  const [ scanned, setScanned ] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ( scanningResult: BarCodeScannerResult ):void => {
    if (!scanned) {
      const { data } = scanningResult;
      if(data) { 
        setScanned(true);
        navigation.navigate("ScannedResult");
        setScanned(false);
      }
    }
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
        <Camera
          style={[ StyleSheet.absoluteFillObject, styles.container ]}
          flashMode={flash}
          ratio="16:9"
          barCodeScannerSettings={ { barcodeTypes: Object.values(BarCodeScanner.Constants.BarCodeType) } }
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        >
          <BarcodeMask 
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
            showAnimatedLine
          />

          <Text style={styles.qrCodeText}> Place QR code </Text>
          <Text style={[ styles.qrCodeText, styles.qrCodeTextBottom ]}> in the box </Text>
          
          <View 
            style={styles.flashContainer}
            onTouchEndCapture={() => flash === Camera.Constants.FlashMode.torch ? 
              setFlash(Camera.Constants.FlashMode.off) :
              setFlash(Camera.Constants.FlashMode.torch) 
            }
          >
            {flash === Camera.Constants.FlashMode.torch ?
              <FlashOff /> :
              <FlashOn /> 
            }
          </View>
        </Camera>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 25
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  qrCodeText: {
    position: "absolute",
    color: colors.White,
    bottom: "20%",
    width: width,
    flex: 1,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Inter-SemiBoldItalic"
  },
  qrCodeTextBottom: {
    bottom: "16.5%"
  },
  flashContainer: {
    position: "absolute",
    backgroundColor: colors.White,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    bottom: "10%",
    right: "10%"
  }
});
