import {
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Pressable,
} from "react-native";
import { TextBold } from "../../components/ThemeText";
import { colorPalette } from "../../constant/color";
import LinearGradient from "react-native-linear-gradient";
import React from "react";

// icons
import Bell from "../../assets/icon/bell.svg";

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <View className="flex-row justify-between px-4 items-center py-4">
        <TextBold
          className=""
          style={{ color: colorPalette.primary, fontSize: 25 }}
        >
          CBPay
        </TextBold>
        <Pressable>
          <Bell />
        </Pressable>
      </View>
      <View className="">
        <View className="flex-row justify-between px-4 items-center">
          <TextBold
            className=" text-base"
            style={{ color: colorPalette.gray2 }}
          >
            Default Account
          </TextBold>
          <Pressable>
            <TextBold style={{ color: colorPalette.primary, fontSize: 13 }}>
              Change
            </TextBold>
          </Pressable>
        </View>

        {/* <LinearGradient colors={["#0055b2", "#002f94"]} style={styles.card}>
          <TextBold>ghgg</TextBold>
        </LinearGradient> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  card: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
