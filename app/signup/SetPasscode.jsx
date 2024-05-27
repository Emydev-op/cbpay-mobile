import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useEffect, useState } from "react";
import { colorPalette } from "../../constant/color";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import TextRegular, { TextBold, TextMedium } from "../../components/ThemeText";
import SignUpNav from "../../components/signup/SignUpNav";
import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";

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
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item === "Del" ? (
                  <TextMedium
                    style={{ fontSize: hp(2), color: colorPalette.primary }}
                  >
                    Delete
                  </TextMedium>
                ) : item === "" ? (
                  <></>
                ) : (
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
                    <TextBold
                      style={{ color: colorPalette.primary, fontSize: hp(4) }}
                    >
                      {item}
                    </TextBold>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default function SetPasscode() {
  const [pinCode, setPinCode] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (pinCode.length === 6) {
      router.push("/signup/ConfirmPasscode");
    }
  }, [pinCode]);

  return (
    <View style={styles.container}>
      <SignUpNav name={"Sign Up"} />
      <View className="px-4 flex-1 justify-between pb-4">
        <View className="h-[30%]">
          <View className="space-y-3">
            <TextBold style={styles.header}>Passcode</TextBold>
            <TextRegular style={styles.subheader}>
              Set a passcode to enter your app and confirm payments.
            </TextRegular>

            <View className="flex-row space-x-4 pt-8 justify-center">
              {[...Array(pinLength).keys()].map((index) => {
                const isSelected =
                  pinCode[index] !== undefined && pinCode[index] !== null;
                return (
                  <View
                    style={{
                      width: hp(2),
                      height: hp(2),
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
        </View>
        <View
          className="h-[60%] justify-center items-center"
          style={{ paddingTop: hp(2) }}
        >
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    color: colorPalette.gray2,
    fontSize: hp(2.5),
  },
  subheader: {
    color: colorPalette.gray2,
    fontSize: hp(2),
  },
});
