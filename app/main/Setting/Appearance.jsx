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
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { colorPalette } from "../../../constant/color";
import TextRegular from "../../../components/ThemeText";

// icon
import MoonIcon from "../../../assets/icon/moon.svg";
import GlobeIcon from "../../../assets/icon/globe.svg";
import ChevronRightIcon from "../../../assets/icon/chevron-right.svg";


export default function Appearance() {
  // const router = useRouter();
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <SafeAreaView style={styles.container}>
      <SignUpNav name={"Appearance"} />
      <View className=" px-5 ">
        <View className="flex-row justify-between items-center mb-3">
          <View className="flex-row items-center gap-x-2">
            <GlobeIcon />
            <View>
              <TextRegular style={{ fontSize: 18 }}>Language</TextRegular>
              <TextRegular style={{ fontSize: 14 }}>English</TextRegular>
            </View>
          </View>
          <ChevronRightIcon />
        </View>
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center gap-x-2">
            <MoonIcon />
            <TextRegular style={{ fontSize: 18 }}>Dark Mode</TextRegular>
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
