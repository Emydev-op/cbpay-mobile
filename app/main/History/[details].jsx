import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import SignUpNav from "../../../components/signup/SignUpNav";
import { colorPalette } from "../../../constant/color";
import TextRegular, {
  TextBold,
  TextMedium,
} from "../../../components/ThemeText";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

// icons
import TrfIcon from "../../../assets/icon/transfer-own.svg";
import DowmloadIcon from "../../../assets/icon/download-white.svg";

export default function HistoryDetails() {
  return (
    <SafeAreaView style={styles.container}>
      <SignUpNav name={"History Detail"} />
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
                Jan 31, 2024 | 10:14 AM
              </TextRegular>
              <TextBold
                style={{
                  color: colorPalette.primary,
                  fontSize: 32,
                  marginBottom: 4,
                }}
              >
                +150,500.00
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
                <TextRegular style={styles.key}>Bank</TextRegular>
                <TextBold style={styles.value}>Zenith Bank</TextBold>
              </View>
              <View className="justify-between flex-row p-4">
                <TextRegular style={styles.key}>Branch Code</TextRegular>
                <TextBold style={styles.value}>NAU-034</TextBold>
              </View>
              <View className="justify-between flex-row p-4">
                <TextRegular style={styles.key}>Transaction ID</TextRegular>
                <TextBold style={styles.value}>O2355STRF0</TextBold>
              </View>
              <View className="justify-between flex-row p-4">
                <TextRegular style={styles.key}>Type</TextRegular>
                <TextBold style={styles.value}>Cash Deposit</TextBold>
              </View>
            </View>
            <Image
              source={require("../../../assets/images/subtract.png")}
              className="w-full"
            />
          </View>
        </ScrollView>
        <Pressable
          // onPress={() => router.push("")}
          style={{ height: hp(7), backgroundColor: colorPalette.primary }}
          className="rounded-full flex-row space-x-2 justify-center items-center mt-4 mx-4"
        >
          <DowmloadIcon />
          <TextMedium style={{ fontSize: hp(2.4), color: colorPalette.white }}>
            Save
          </TextMedium>
        </Pressable>
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
