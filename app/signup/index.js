import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { colorPalette } from "../../constant/color";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import {
  DevicePhoneMobileIcon,
  LockClosedIcon,
} from "react-native-heroicons/outline";
import TextRegular, { TextBold, TextMedium } from "../../components/ThemeText";
import SignUpNav from "../../components/signup/SignUpNav";
import { TextInput } from "react-native-paper";

export default function PhoneSignup() {
  const [phoneNo, setPhoneNo] = useState("");
  return (
    <View style={styles.container}>
      <SignUpNav name={"Sign Up"} />
      <View className="px-4 flex-1 justify-between pb-4">
        <View className="space-y-3">
          <TextBold style={styles.header}>Sign up with phone number</TextBold>
          <TextRegular style={styles.subheader}>
            We will send a code to verify your phone number.
          </TextRegular>
          <View
            className="flex-row border-2 px-3 w-full items-center rounded-xl" style={{borderColor:colorPalette.gray1}}
          >
            <DevicePhoneMobileIcon color={colorPalette.gray1} size={hp(3.5)} />
            <TextInput
              label="Phone"
              value={phoneNo}
              onChangeText={(no) => setPhoneNo(no)}
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
        </View>
        <View>
          <TouchableOpacity
            // onPress={handleLogin}
            style={{ height: hp(7), backgroundColor: colorPalette.primary }}
            className="rounded-full justify-center items-center"
          >
            <TextMedium
              style={{ fontSize: hp(2.4), color: colorPalette.white }}
            >
              Get OTP
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
