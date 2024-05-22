import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import CustomKeyboardView from "../../components/CustomKeyboardView";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import TextRegular, { TextMedium } from "../../components/ThemeText";
import Mobile from "../../assets/icon/mobile.svg";
import { TextInput } from "react-native-paper";
import {
  DevicePhoneMobileIcon,
  LockClosedIcon,
} from "react-native-heroicons/outline";
import { colorPalette } from "../../constant/color";

export default function LoginMain() {
  const [phoneNo, setPhoneNo] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <CustomKeyboardView>
      <View className="flex-1 items-center space-y-28 justify-center">
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
          <View className="space-y-5 w-full px-6">
            <View
              className={`flex-row border-2 border-[${colorPalette.gray1}] px-3 w-full items-center rounded-xl`}
            >
              <DevicePhoneMobileIcon
                color={colorPalette.gray1}
                size={hp(3.5)}
              />
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

            <View
              className={`flex-row border-2 border-[${colorPalette.gray1}] px-3 w-full items-center rounded-xl`}
            >
              <LockClosedIcon color={colorPalette.gray1} size={hp(3.5)} />
              <TextInput
                label="Password"
                secureTextEntry
                value={password}
                onChangeText={(no) => setPassword(no)}
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

            <View className="space-y-5 pt-2">
              <TouchableOpacity
                // onPress={handleLogin}
                style={{ height: hp(7), backgroundColor: colorPalette.primary }}
                className="rounded-full justify-center items-center"
              >
                <TextMedium
                  style={{ fontSize: hp(2.4), color: colorPalette.white }}
                >
                  Login
                </TextMedium>
              </TouchableOpacity>

              <Pressable>
                <TextMedium
                  className={`text-lg text-center`}
                  style={{
                    color: colorPalette.gray1,
                    textAlign: "center",
                    fontSize: hp(2),
                  }}
                >
                  Forgot Password?
                </TextMedium>
              </Pressable>
            </View>
          </View>
        </View>
        <View className="flex-row">
          <TextMedium style={{ fontSize: hp(2) }}>
            Don’t have an account?{""}
          </TextMedium>
          <Pressable>
            <TextMedium
              className="mb-0"
              style={{ color: colorPalette.primary, fontSize: hp(2) }}
            >
              {" "}
              Sign Up
            </TextMedium>
          </Pressable>
        </View>
      </View>
    </CustomKeyboardView>
  );
}
