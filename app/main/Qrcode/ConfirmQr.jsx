import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import SignUpNav from "../../../components/signup/SignUpNav";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { colorPalette } from "../../../constant/color";
import TextRegular, {
  TextBold,
  TextMedium,
} from "../../../components/ThemeText";
import { useRouter } from "expo-router";


const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "Del"];
const pinLength = 6;

const DialPad = ({ onPress }) => {
  return (
    <FlatList
      data={dialPad}
      scrollEnabled={false}
      numColumns={3}
      columnWrapperStyle={{ gap: 30 }}
      contentContainerStyle={{ gap: 30, width: "100%" }}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => {
        return (
          <Pressable
            onPress={() => {
              onPress(item);
            }}
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
          </Pressable>
        );
      }}
    />
  );
};

export default function ConfirmQr() {
  const [pinCode, setPinCode] = React.useState([]);
  const router = useRouter();
  React.useEffect(() => {
    if (pinCode.length === 6) {
      router.push("/main/Qrcode/TrfReceipt");
    }
  }, [pinCode]);

  return (
    <SafeAreaView style={styles.container}>
      <SignUpNav name={"Scan QR"} />
      <View className="pb-4 flex-1 justify-between">
        <View className="flex-1 justify-evenly">
          <View className="items-center space-y-2.5">
            <View
              className="w-16 h-16 justify-center items-center rounded-full"
              style={{ backgroundColor: colorPalette.primary2 }}
            >
              <TextBold
                style={{
                  color: colorPalette.primary,
                  fontSize: 40,
                }}
              >
                A
              </TextBold>
            </View>
            <TextBold
              style={{
                color: colorPalette.primary,
                fontSize: 20,
              }}
            >
              Anowi Kosi Reginald
            </TextBold>
          </View>
          <View className="items-center space-y-4">
            <TextRegular
              style={{
                color: colorPalette.gray2,
                fontSize: 13,
              }}
            >
              Passcode
            </TextRegular>
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
        </View>
        <View className="pb-6 items-center">
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
