import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  Pressable,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import SignUpNav from "../../../components/signup/SignUpNav";
import { colorPalette } from "../../../constant/color";
import TextRegular, {
  TextBold,
  TextMedium,
} from "../../../components/ThemeText";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useRouter } from "expo-router";

// icons
import TrfIcon from "../../../assets/icon/upload.svg";
import DowmloadIcon from "../../../assets/icon/download.svg";

export default function TrfReceipt() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <SignUpNav name={"Scan QR"} />
      <View className="pb-4 flex-1 justify-between">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="mx-4 items-center">
            <View
              className="items-center w-full rounded-tl-2xl rounded-tr-2xl"
              style={{
                backgroundColor: colorPalette.primary2,
                paddingTop: hp(7),
                paddingBottom: hp(1.7),
              }}
            >
              <View
                style={{
                  backgroundColor: colorPalette.primary,
                }}
                className="w-14 h-14 mb-4 rounded-full items-center justify-center"
              >
                <TrfIcon />
              </View>
              <TextRegular
                style={{
                  color: colorPalette.gray3,
                  fontSize: 14,
                  marginBottom: 4,
                }}
              >
                Apr 17, 2024 | 09:11 PM
              </TextRegular>
              <TextBold
                style={{
                  color: colorPalette.primary,
                  fontSize: 32,
                  marginBottom: 4,
                }}
              >
                -50,000.00
              </TextBold>
              <TextBold style={{ color: colorPalette.primary, fontSize: 16 }}>
                NGN
              </TextBold>
            </View>
            <Image
              source={require("../../../assets/images/subtract2.png")}
              className="w-full"
            />
            <View
              className="w-full"
              style={{
                backgroundColor: colorPalette.primary2,
                paddingTop: hp(1.5),
                paddingBottom: hp(2.5),
              }}
            >
              <View className="justify-between flex-row p-4">
                <TextRegular style={styles.key}>Name</TextRegular>
                <TextBold style={styles.value}>John William Doe</TextBold>
              </View>
              <View className="justify-between flex-row p-4">
                <TextRegular style={styles.key}>Account No.</TextRegular>
                <TextBold style={styles.value}>0323440543</TextBold>
              </View>
              <View className="justify-between flex-row p-4">
                <TextRegular style={styles.key}>Transaction ID</TextRegular>
                <TextBold style={styles.value}>O2355STRF0</TextBold>
              </View>
              <View className="justify-between flex-row p-4">
                <TextRegular style={styles.key}>Type</TextRegular>
                <TextBold style={styles.value}>Scan to Pay</TextBold>
              </View>
            </View>
            <Image
              source={require("../../../assets/images/subtract.png")}
              className="w-full"
            />
          </View>
        </ScrollView>
        <View className="flex-row mx-4 space-x-2">
          <TouchableOpacity
            style={{
              height: hp(7),
              width: hp(7),
              backgroundColor: colorPalette.primary2,
            }}
            className="rounded-full justify-center items-center mt-4"
          >
            <DowmloadIcon />
          </TouchableOpacity>
          <Pressable
            onPress={() => router.replace("/main")}
            style={{ height: hp(7), backgroundColor: colorPalette.primary }}
            className="rounded-full flex-1 flex-row space-x-2 justify-center items-center mt-4"
          >
            <TextMedium
              style={{ fontSize: hp(2.4), color: colorPalette.white }}
            >
              Done
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
  key: {
    color: colorPalette.gray2,
    fontSize: 16,
  },
  value: {
    color: colorPalette.gray2,
    fontSize: 16,
  },
});
