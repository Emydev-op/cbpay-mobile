import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { colorPalette } from "../../constant/color";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { DevicePhoneMobileIcon } from "react-native-heroicons/outline";
import TextRegular, { TextBold, TextMedium } from "../../components/ThemeText";
import SignUpNav from "../../components/signup/SignUpNav";
import { TextInput } from "react-native-paper";
import { useRouter } from "expo-router";

export default function VerifyID() {
  const router = useRouter();
  const handleVerify = () => {
    router.push("signup/ChoosePassword");
  };
  return (
    <View style={styles.container}>
      <SignUpNav name={"Sign Up"} />
      <View className="px-4 flex-1 justify-between pb-4">
        <ScrollView showsVerticalScrollIndicator={false} className="space-y-3">
          <TextBold style={styles.header}>Verify your ID</TextBold>
          <TextRegular style={styles.subheader}>
            Please provide the photos of your ID cards.
          </TextRegular>
        </ScrollView>
        <View>
          <TouchableOpacity
            onPress={handleVerify}
            style={{ height: hp(7), backgroundColor: colorPalette.primary }}
            className="rounded-full justify-center items-center"
          >
            <TextMedium
              style={{ fontSize: hp(2.4), color: colorPalette.white }}
            >
              Verify
            </TextMedium>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    color: colorPalette.gray2,
    fontSize: hp(2.5),
  },
  subheader: {
    color: colorPalette.gray2,
    fontSize: hp(2),
  },
});
