import { View, Text, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import CustomKeyboardView from "../../components/CustomKeyboardView";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function LoginPassword() {
  return (
    <CustomKeyboardView>
      <StatusBar style="dark" />
      <View
        className="flex-1 space-y-8 items-center"
        style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }}
      >
        <View className="items-center rounded-xl">
          <Image
            source={require("../../assets/logo/logo.png")}
            style={{ height: hp(10), width: hp(10), borderRadius: 25 }}
          />
          <Text className="font-bold tracking-wider text-3xl">Welcome!</Text>
          <Text className="font-base text-lg">Please login to continue.</Text>
        </View>
      </View>
    </CustomKeyboardView>
  );
}
