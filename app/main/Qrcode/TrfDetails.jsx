import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  Pressable,
} from "react-native";
import React from "react";
import SignUpNav from "../../../components/signup/SignUpNav";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { colorPalette } from "../../../constant/color";
import TextRegular, {
  TextBold,
  TextMedium,
} from "../../../components/ThemeText";
import ScanIcon from "../../../assets/icon/scanqr.svg";
import { useRouter } from "expo-router";

export default function TrfDetails() {
  const router = useRouter()
  return (
    <SafeAreaView style={styles.container}>
      <SignUpNav name={"Scan QR"} />
      <View className="flex-1 justify-between">
        <View className=" px-4 space-y-4">
          <View className="justify-center items-center space-y-2 mt-5">
            <ScanIcon />
            <TextRegular
              className="text-lg pt-2"
              style={{ color: colorPalette.gray2 }}
            >
              Scan to Pay
            </TextRegular>
            <TextBold
              className="text-4xl"
              style={{ color: colorPalette.primary }}
            >
              21,000
            </TextBold>
            <TextBold
              className="text-base"
              style={{ color: colorPalette.primary }}
            >
              NGN
            </TextBold>
          </View>

          <View
            className="rounded-2xl py-2 "
            style={{
              backgroundColor: colorPalette.primary2,
              marginHorizontal: 4,
            }}
          >
            <View className="px-5 py-2">
              <TextMedium style={{ color: colorPalette.gray3, fontSize: 12 }}>
                From
              </TextMedium>
              <TextRegular style={{ fontSize: 18 }}>0987-1234-2468</TextRegular>
              <TextRegular style={{ color: colorPalette.gray3, fontSize: 14 }}>
                Smart Account
              </TextRegular>
            </View>
            <View className="px-5 py-2">
              <TextMedium style={{ color: colorPalette.gray3, fontSize: 12 }}>
                To
              </TextMedium>
              <TextRegular style={{ fontSize: 18 }}>
                5432-6587-2491-0012
              </TextRegular>
              <TextRegular style={{ color: colorPalette.gray3, fontSize: 14 }}>
                Anowi Kosi
              </TextRegular>
            </View>
            <View className="px-5 py-2">
              <TextMedium style={{ color: colorPalette.gray3, fontSize: 12 }}>
                Transaction ID
              </TextMedium>
              <TextRegular style={{ fontSize: 18 }}>
                TRS3248576843SCH
              </TextRegular>
            </View>
          </View>
        </View>
        <View className="pb-4">
          <Pressable
            onPress={() => router.push("/main/Qrcode/ConfirmQr")}
            style={{ height: hp(7), backgroundColor: colorPalette.primary }}
            className="rounded-full flex-row space-x-2 justify-center items-center mt-4 mx-4"
          >
            <TextMedium
              style={{ fontSize: hp(2.4), color: colorPalette.white }}
            >
              Pay
            </TextMedium>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white",
  },
});
