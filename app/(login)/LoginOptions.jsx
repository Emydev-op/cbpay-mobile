import {
  View,
  Image,
  Pressable,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import TextRegular, { TextBold, TextMedium } from "../../components/ThemeText";
import FingerprintIcon from "../../assets/icon/fingerprint.svg";
import { colorPalette } from "../../constant/color";
import { useRouter } from "expo-router";

export default function LoginOptions() {
  const router = useRouter();
  return (
    <SafeAreaView
      className="flex-1 items-center justify-center"
      style={styles.container}
    >
      <View className="w-full">
        <View className="items-center rounded-xl space-y-5">
          <Image
            source={require("../../assets/logo/logo.png")}
            style={{ height: hp(10), width: hp(10), borderRadius: 25 }}
          />
          <View className="items-center space-y-1">
            <TextRegular className="font-bold tracking-wider text-3xl">
              Welcome Back!
            </TextRegular>
            <TextRegular
              className="font-base text-xl"
              style={{ color: colorPalette.gray2 }}
            >
              Use touch ID to login.
            </TextRegular>
          </View>
          <View className="space-y-5 w-full px-6 pt-16">
            <Pressable className="mx-auto">
              <FingerprintIcon />
            </Pressable>

            <TextBold
              style={{ fontSize: hp(2.1), color: colorPalette.gray1 }}
              className="text-center"
            >
              OR
            </TextBold>

            <Pressable
              onPress={() => router.push("/LoginPasscode")}
              style={{ height: hp(7), backgroundColor: colorPalette.primary2 }}
              className="rounded-full justify-center items-center"
            >
              <TextMedium
                className="mb-0"
                style={{ color: colorPalette.primary, fontSize: hp(2.4) }}
              >
                Use Passcode
              </TextMedium>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#ffffff",
  },
});
