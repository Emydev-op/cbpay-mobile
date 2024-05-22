import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import TextRegular, { TextMedium } from "../../components/ThemeText";
import FingerprintIcon from "../../assets/icon/fingerprint.svg";
import { colorPalette } from "../../constant/color";

export default function LoginOptions() {
  return (
    <View
      className="flex-1 items-center space-y-28 justify-center border"
      style={styles.container}
    >
      <View className="space-y-10 " style={{ marginTop: hp(20) }}>
        <View className="items-center rounded-xl space-y-5">
          <Image
            source={require("../../assets/logo/logo.png")}
            style={{ height: hp(10), width: hp(10), borderRadius: 25 }}
          />
          <View className="items-center space-y-1">
            <TextRegular className="font-bold tracking-wider text-3xl">
              Welcome!
            </TextRegular>
            <TextRegular className="font-base text-lg">
              Please login to continue.
            </TextRegular>
          </View>
        </View>
        {/* login form */}
      </View>
      <TextMedium style={{ fontSize: hp(2) }}>
        Don’t have an account?{""}
        <Pressable>
          <TextMedium
            className={`text-[${colorPalette.primary}]`}
            style={{ color: colorPalette.primary, fontSize: hp(2) }}
          >
            {" "}
            Sign Up
          </TextMedium>
        </Pressable>
      </TextMedium>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#ffffff",
  },
});
