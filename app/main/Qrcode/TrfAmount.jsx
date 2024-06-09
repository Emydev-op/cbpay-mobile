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

const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "Del"];
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

export default function TrfAmount() {
  const [amount, setAmount] = React.useState("");
  const handlePress = (item) => {
    if (item === "Del") {
      setAmount((prev) => prev.slice(0, -1));
    } else {
      setAmount((prev) => prev.concat(item.toString()));
    }
  };
  console.log(amount, "amount");
  const formatAmount = (amount) => {
    if (amount === "") return "000";
    const [integerPart, decimalPart] = amount.split(".");
    const formattedInteger = new Intl.NumberFormat().format(integerPart);
    return decimalPart
      ? `${formattedInteger}.${decimalPart}`
      : formattedInteger;
  };

  return (
    <SafeAreaView style={styles.container}>
      <SignUpNav name={"Scan QR"} />
      <View className="flex-1 justify-between">
        <View className="justify-center items-center space-y-1 flex-1">
          <TextRegular
            className="text-lg"
            style={{ color: colorPalette.gray2 }}
          >
            Amount
          </TextRegular>
          <TextBold
            className="text-4xl"
            style={{ color: colorPalette.primary }}
          >
            {formatAmount(amount)}
          </TextBold>
          <TextBold
            className="text-base"
            style={{ color: colorPalette.primary }}
          >
            NGN
          </TextBold>
        </View>
        <View className="pb-4">
          <View className="items-center pb-2">
            <DialPad onPress={(item) => handlePress(item)} />
          </View>
          <Pressable
            // onPress={() => router.push("")}
            style={{ height: hp(7), backgroundColor: colorPalette.primary }}
            className="rounded-full flex-row space-x-2 justify-center items-center mt-4 mx-4"
          >
            <TextMedium
              style={{ fontSize: hp(2.4), color: colorPalette.white }}
            >
              Continue
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
  },
});
