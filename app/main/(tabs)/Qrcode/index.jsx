import { CameraView, useCameraPermissions } from "expo-camera";
import { useEffect, useState } from "react";
import {
  Button,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TextRegular from "../../../../components/ThemeText";
import { colorPalette } from "../../../../constant/color";
import TouchIcon from "../../../../assets/icon/touch.svg";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useRouter } from "expo-router";
const dataaa = {
  boundingBox: {
    origin: { x: 91.42857360839844, y: 58.85714340209961 },
    size: { height: 170.85714721679688, width: 121.14286041259766 },
  },
  cornerPoints: [
    { x: 58.85714340209961, y: 91.42857360839844 },
    { x: 69.14286041259766, y: 212.57142639160156 },
    { x: 219.42857360839844, y: 210.2857208251953 },
    { x: 229.7142791748047, y: 93.71428680419922 },
  ],
  data: "https://www.qrstuff.com/",
  raw: "https://www.qrstuff.com/",
  target: 5007,
  type: 256,
};
export default function App() {
  const router = useRouter();
  const [facing, setFacing] = useState("back");
  const [flashMode, setFlashMode] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const [hasScanned, setHasScanned] = useState(false);

  useEffect(() => {
    setHasScanned(false);
    setFlashMode(false);
  }, []);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  const handleQR = (data) => {
    if (!hasScanned && data.data) {
      setHasScanned(true);
      router.push("/main/Qrcode/TrfAmount");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextRegular className="text-lg" style={{ color: colorPalette.gray2 }}>
        Scan the QR code to pay
      </TextRegular>
      <View
        className=" rounded-2xl relative"
        style={{ width: wp("70%"), height: wp("70%") }}
      >
        {/* <Image
          source={require("../../../../assets/images/cameraframe.png")}
          className="w-full h-full "
        /> */}
        <CameraView
          style={styles.camera}
          ratio="16:9"
          barcodeScannerSettings={{
            barcodeTypes: ["qr"],
          }}
          enableTorch={flashMode}
          autoFocus={true}
          facing={facing}
          onBarcodeScanned={(data) => {
            handleQR(data);
            console.log(hasScanned);
          }}
          className=" rounded"
        />
      </View>
      <TouchableOpacity
        className="mt-3"
        onPress={() => setFlashMode((curr) => !curr)}
      >
        <TouchIcon />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
  },
  camera: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
