import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { colorPalette } from "../../constant/color";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { DevicePhoneMobileIcon } from "react-native-heroicons/outline";
import TextRegular, { TextBold, TextMedium } from "../../components/ThemeText";
import SignUpNav from "../../components/signup/SignUpNav";
import { TextInput } from "react-native-paper";
import { useRouter } from "expo-router";

export default function SignUpOtp() {
  const [otpCode, setOtpCode] = useState("");
  const router = useRouter();
  return (
    <View style={styles.container}>
      <SignUpNav name={"Sign Up"} />
      <View className="px-4 flex-1 justify-between pb-4">
        <View className="space-y-3">
          <TextBold style={styles.header}>OTP Verification</TextBold>
          <TextRegular style={styles.subheader}>
            We went you a code to verify your phone number{" "}
            <TextBold>08013498145</TextBold>.
          </TextRegular>
          <View className="flex-row justify-between items-center">
            <View
              className="flex-row border-2 px-3 w-full items-center rounded-xl"
              style={{ borderColor: colorPalette.gray1, width: "57%" }}
            >
              <TextInput
                label="OTP Code"
                value={otpCode}
                onChangeText={(no) => setOtpCode(no)}
                keyboardType="phone-pad"
                mode="outlined"
                className="bg-white flex-1 text-black"
                style={{ fontSize: hp(2.3), marginBottom: 6 }}
                textColor="#272A2F"
                cursorColor={colorPalette.gray1}
                outlineColor="transparent"
                activeOutlineColor={colorPalette.gray1}
                outlineStyle={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                }}
              />
            </View>
            <View style={{ width: "40%" }}>
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  height: hp(7),
                  backgroundColor: colorPalette.primary2,
                }}
                className="rounded-full justify-center items-center"
              >
                <TextMedium
                  style={{ fontSize: hp(2.5), color: colorPalette.primary }}
                >
                  Resend
                </TextMedium>
              </TouchableOpacity>
            </View>
          </View>
          <TextMedium style={[styles.subheader, {paddingTop: wp(5)}]}>
            This code will be expired 1 minute after this message.{" "}
            <TextBold style={{ color: colorPalette.primary }}>0:45s</TextBold>
          </TextMedium>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {}}
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
