import { Pressable, View } from "react-native";
import React from "react";
import { colorPalette } from "../../constant/color";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { TextMedium } from "../../components/ThemeText";
import { useRouter } from "expo-router";

import ChevronIcon from "../../assets/icon/chevron-left.svg";

export default function SignUpNav({ name }) {
  const router = useRouter();
  return (
    <View className="flex-row mb-6 px-3 py-4 items-center space-x-3">
      <Pressable
        onPress={() => {
          router.back();
        }}
        className="px-1"
      >
        <ChevronIcon style={{ padding: hp(2) }} />
      </Pressable>
      <TextMedium
        className=""
        style={{ fontSize: hp(2.5), color: colorPalette.gray2 }}
      >
        {name}
      </TextMedium>
    </View>
  );
}
