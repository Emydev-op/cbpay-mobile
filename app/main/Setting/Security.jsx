import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  Switch,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import SignUpNav from "../../../components/signup/SignUpNav";
import { colorPalette } from "../../../constant/color";
import TextRegular from "../../../components/ThemeText";

// icon
import BiometricsIcon from "../../../assets/icon/fingerprint-sm.svg";
import SecurityIcon from "../../../assets/icon/pin-code.svg";
import ChevronRightIcon from "../../../assets/icon/chevron-right.svg";

export default function Security() {
  const router = useRouter();
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <SafeAreaView style={styles.container}>
      <SignUpNav name={"Security"} />
      <View className=" px-5 space-y-1">
        <View className="flex-row justify-between items-center mb-3">
          <View className="flex-row items-center gap-x-2">
            <SecurityIcon />
            <TextRegular style={{ fontSize: 18 }}>Change Passcode</TextRegular>
          </View>
          <ChevronRightIcon />
        </View>
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center gap-x-2">
            <BiometricsIcon  />
            <View>
              <TextRegular style={{ fontSize: 18 }}>
                Face ID/Touch ID
              </TextRegular>
              <TextRegular style={{ fontSize: 14 }}>
                Use to login your app.
              </TextRegular>
            </View>
          </View>
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            className="border"
            trackColor={{
              false: "#548CCB",
              true: colorPalette.primary,
            }}
            thumbColor={"#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white",
  },
});
