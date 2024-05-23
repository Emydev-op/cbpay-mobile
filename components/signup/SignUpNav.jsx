import { Pressable, View } from "react-native";
import React from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { colorPalette } from "../../constant/color";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { TextMedium } from "../../components/ThemeText";
import { useRouter } from "expo-router";

export default function SignUpNav({name}) {
  const router = useRouter();
  return (
    <View className="flex-row mb-6 px-6 py-4 items-center space-x-3">
      <Pressable
        onPress={() => {
          router.back();
        }}
      >
        <ChevronLeftIcon color={colorPalette.gray2} size={hp(3)} style={{padding:hp(2)}} />
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
