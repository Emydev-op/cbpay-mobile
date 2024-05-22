import { View, Text, Image } from "react-native";
import React from "react";
import CustomKeyboardView from "../../components/CustomKeyboardView";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import TextRegular from "../../components/ThemeText";
import Mobile from "../../assets/icon/mobile.svg";
import { TextInput } from "react-native-paper";
import { DevicePhoneMobileIcon } from "react-native-heroicons/outline";

export default function index() {
  const [phoneNo, setPhoneNo] = React.useState("");

  return (
    <CustomKeyboardView>
      <View
        className="flex-1 space-y-8 items-center justify-center"
        style={{ paddingTop: hp(8) }}
      >
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
        <View className="space-y-4 w-full px-6">
          <View className="flex-row border-2 border-[#7D838C] space-x-1 px-3 py-1 w-full items-center rounded-xl">
            <DevicePhoneMobileIcon color="#7D838C" size={hp(3.5)} />
            <TextInput
              label="Phone"
              value={phoneNo}
              className="bg-white flex-1 text-black border"
              style={{ fontSize: hp(2.5) }}
              selectionColor="green"
              cursorColor="#7d838c"
              underlineColor="transparent"
              activeUnderlineColor="#7d838c"
              textColor="#272A2F"
              onChangeText={(no) => setPhoneNo(no)}
              placeholderTextColor="#7D838C"
              underlineStyle={{ backgroundColor: "transparent" }}
              mode="flat"
            />
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
}
