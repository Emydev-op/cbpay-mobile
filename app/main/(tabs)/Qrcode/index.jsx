import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SignUpNav from "../../../../components/signup/SignUpNav";

export default function App() {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();

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

  return (
    // <View style={styles.container}>
    //   <CameraView style={styles.camera} facing={facing}>
    //     <View style={styles.buttonContainer}>
    //       <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
    //         <Text style={styles.text}>Flip Camera</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </CameraView>
    // </View>
    <SafeAreaView style={styles.container}>
      <SignUpNav name={"Scan QR"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
