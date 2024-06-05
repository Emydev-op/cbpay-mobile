import {
  View,
  Image,
  Pressable,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Alert,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import TextRegular, { TextBold } from "../../components/ThemeText";
import { colorPalette } from "../../constant/color";
import { BackspaceIcon, FingerPrintIcon } from "react-native-heroicons/outline";
import * as Haptics from "expo-haptics";

const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "Del"];
const pinLength = 6;

const DialPad = ({ onPress }) => {
  return (
    <View>
      <FlatList
        data={dialPad}
        scrollEnabled={false}
        numColumns={3}
        columnWrapperStyle={{ gap: 30 }}
        contentContainerStyle={{ gap: 30, width: "100%" }}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                onPress(item);
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
              }}
              disabled={item === ""}
            >
              <View
                style={{
                  width: hp(9),
                  height: hp(9),
                  borderRadius: 45,
                  backgroundColor: colorPalette.primary2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item === "Del" ? (
                  <BackspaceIcon color={colorPalette.primary} size={hp(4.5)} />
                ) : item === "" ? (
                  <Pressable
                    onPress={() => {
                      //vibration
                      Haptics.notificationAsync(
                        Haptics.NotificationFeedbackType.Error
                      );
                      Alert.alert("Fingerprint Bio?", "Coming very soon!");
                    }}
                  >
                    <FingerPrintIcon
                      color={colorPalette.primary}
                      size={hp(4.5)}
                    />
                  </Pressable>
                ) : (
                  <TextBold
                    style={{ color: colorPalette.primary, fontSize: hp(4) }}
                  >
                    {item}
                  </TextBold>
                )}
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default function LoginPasscode() {
  const [pinCode, setPinCode] = useState([]);

  return (
    <SafeAreaView className="flex-1 bg-white" style={styles.container}>
      <View className="h-[40%] items-center justify-end space-y-6" style={{}}>
        <Image
          source={require("../../assets/logo/logo.png")}
          style={{ height: hp(10), width: hp(10), borderRadius: 25 }}
        />
        <View className="items-center space-y-1">
          <TextRegular className="font-bold tracking-wider text-3xl">
            Welcome Back!
          </TextRegular>
          <TextRegular
            className="font-base text-lg"
            style={{ color: colorPalette.gray2 }}
          >
            Use passcode to login.
          </TextRegular>
        </View>
        <View className="flex-row space-x-4 pt-1">
          {[...Array(pinLength).keys()].map((index) => {
            const isSelected =
              pinCode[index] !== undefined && pinCode[index] !== null;
            return (
              <View
                style={{
                  width: hp(2.1),
                  height: hp(2.1),
                  borderRadius: 45,
                  backgroundColor: isSelected
                    ? colorPalette.primary
                    : colorPalette.primary3,
                }}
                key={index}
              />
            );
          })}
        </View>
      </View>
      <View className="h-[60%] items-center" style={{ paddingTop: hp(5) }}>
        <DialPad
          onPress={(item) => {
            if (item === "Del") {
              setPinCode((prev) => prev.slice(0, prev.length - 1));
            } else if (typeof item === "number") {
              pinCode.length !== pinLength &&
                setPinCode((prev) => [...prev, item]);
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#ffffff",
  },
});
