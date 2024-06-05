import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { colorPalette } from "../../constant/color";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import TextRegular, { TextBold, TextMedium } from "../../components/ThemeText";
import SignUpNav from "../../components/signup/SignUpNav";
import { useRouter } from "expo-router";
import { font } from "../../constant/font";
import UploadImg from "../../assets/icon/uploadPhoto.svg";
import { TextInput } from "react-native-paper";

export default function VerifyID() {
  const [active, setActive] = useState(1);
  const router = useRouter();
  const handleVerify = () => {
    router.push("signup/ChoosePassword");
  };
  return (
    <SafeAreaView style={styles.container}>
      <SignUpNav name={"Sign Up"} />
      <View className="px-4 flex-1 justify-between pb-4">
        <View className="space-y-3">
          <TextBold style={styles.header}>Verify your ID</TextBold>
          <TextRegular style={styles.subheader}>
            Please provide the photos of your ID cards.
          </TextRegular>
          <View>
            <View
              className="mx-auto mt-4 flex-row border space-x-2 p-1 rounded-xl"
              style={{
                backgroundColor: colorPalette.primary2,
                borderColor: colorPalette.primary4,
              }}
            >
              <Pressable
                onPress={() => {
                  setActive(1);
                }}
                className="rounded-lg"
                style={{ backgroundColor: active === 1 ? colorPalette.primary : "transparent" }}
              >
                <TextRegular
                  style={{
                    fontSize: hp(1.7),
                    paddingHorizontal: hp(2),
                    paddingVertical: hp(1),
                    color: active === 1 ? "white" : colorPalette.primary,
                  }}
                >
                  NIN
                </TextRegular>
              </Pressable>
              <Pressable
                onPress={() => {
                  setActive(2);
                }}
                className="rounded-lg"
                style={{ backgroundColor: active === 2 ? colorPalette.primary : "transparent" }}
              >
                <TextRegular
                  style={{
                    fontSize: hp(1.7),
                    paddingHorizontal: hp(2),
                    paddingVertical: hp(1),
                    color: active === 2 ? "white" : colorPalette.primary,
                  }}
                >
                  Passport
                </TextRegular>
              </Pressable>
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              className="mt-6 pb-5"
            >
              {active === 1 ? (
                <>
                  <View
                    className="rounded-2xl w-full justify-center items-center"
                    style={{
                      borderWidth: 2,
                      borderStyle: "dashed",
                      backgroundColor: colorPalette.primary2,
                      borderColor: colorPalette.primary3,
                      paddingVertical: hp(4),
                    }}
                  >
                    <View className="items-center space-y-3">
                      <UploadImg />
                      <View className="space-y-1">
                        <TextMedium
                          className="text-center"
                          style={{ fontSize: font.size14 }}
                        >
                          Upload
                        </TextMedium>
                        <TextRegular
                          className="text-center"
                          style={{
                            fontSize: font.size12,
                            color: colorPalette.gray3,
                          }}
                        >
                          Please upload a photo of the ID
                        </TextRegular>
                      </View>
                    </View>
                  </View>
                  <View className="mt-5 space-y-3">
                    <View
                      className=" border-2 w-full justify-center items-center rounded-2xl"
                      style={{ borderColor: colorPalette.gray1 }}
                    >
                      <TextInput
                        label="Full Name"
                        // keyboardType="phone-pad"
                        mode="outlined"
                        className="bg-white w-full text-black"
                        style={{ fontSize: hp(2.3), marginBottom: 6 }}
                        textColor="#272A2F"
                        cursorColor={colorPalette.gray1}
                        outlineColor="transparent"
                        activeOutlineColor={colorPalette.gray1}
                        outlineStyle={{
                          backgroundColor: "transparent",
                          borderColor: "transparent",
                        }}
                      />
                    </View>
                    <View
                      className="mb-2 border-2 w-full justify-center items-center rounded-2xl"
                      style={{ borderColor: colorPalette.gray1 }}
                    >
                      <TextInput
                        label="NRC Number"
                        keyboardType="phone-pad"
                        mode="outlined"
                        className="bg-white w-full text-black"
                        style={{ fontSize: hp(2.3), marginBottom: 6 }}
                        textColor="#272A2F"
                        cursorColor={colorPalette.gray1}
                        outlineColor="transparent"
                        activeOutlineColor={colorPalette.gray1}
                        outlineStyle={{
                          backgroundColor: "transparent",
                          borderColor: "transparent",
                        }}
                      />
                    </View>
                  </View>
                </>
              ) : (
                <>
                  <View
                    className="rounded-2xl w-full justify-center items-center"
                    style={{
                      borderWidth: 2,
                      borderStyle: "dashed",
                      backgroundColor: colorPalette.primary2,
                      borderColor: colorPalette.primary3,
                      paddingVertical: hp(4),
                    }}
                  >
                    <View className="items-center space-y-3">
                      <UploadImg />
                      <View className="space-y-1">
                        <TextMedium
                          className="text-center"
                          style={{ fontSize: font.size14 }}
                        >
                          Upload
                        </TextMedium>
                        <TextRegular
                          className="text-center"
                          style={{
                            fontSize: font.size12,
                            color: colorPalette.gray3,
                          }}
                        >
                          Please upload a photo of the passport
                        </TextRegular>
                      </View>
                    </View>
                  </View>
                  <View className="mt-5 space-y-3">
                    <View
                      className=" border-2 w-full justify-center items-center rounded-2xl"
                      style={{ borderColor: colorPalette.gray1 }}
                    >
                      <TextInput
                        label="Full Name"
                        // keyboardType="phone-pad"
                        mode="outlined"
                        className="bg-white w-full text-black"
                        style={{ fontSize: hp(2.3), marginBottom: 6 }}
                        textColor="#272A2F"
                        cursorColor={colorPalette.gray1}
                        outlineColor="transparent"
                        activeOutlineColor={colorPalette.gray1}
                        outlineStyle={{
                          backgroundColor: "transparent",
                          borderColor: "transparent",
                        }}
                      />
                    </View>
                    <View
                      className="mb-2 border-2 w-full justify-center items-center rounded-2xl"
                      style={{ borderColor: colorPalette.gray1 }}
                    >
                      <TextInput
                        label="Passport Number"
                        keyboardType="phone-pad"
                        mode="outlined"
                        className="bg-white w-full text-black"
                        style={{ fontSize: hp(2.3), marginBottom: 6 }}
                        textColor="#272A2F"
                        cursorColor={colorPalette.gray1}
                        outlineColor="transparent"
                        activeOutlineColor={colorPalette.gray1}
                        outlineStyle={{
                          backgroundColor: "transparent",
                          borderColor: "transparent",
                        }}
                      />
                    </View>
                    <View
                      className=" border-2 w-full justify-center items-center rounded-2xl"
                      style={{ borderColor: colorPalette.gray1 }}
                    >
                      <TextInput
                        label="Country Code"
                        keyboardType="phone-pad"
                        mode="outlined"
                        className="bg-white w-full text-black"
                        style={{ fontSize: hp(2.3), marginBottom: 6 }}
                        textColor="#272A2F"
                        cursorColor={colorPalette.gray1}
                        outlineColor="transparent"
                        activeOutlineColor={colorPalette.gray1}
                        outlineStyle={{
                          backgroundColor: "transparent",
                          borderColor: "transparent",
                        }}
                      />
                    </View>
                  </View>
                </>
              )}
            </ScrollView>
          </View>
        </View>

        <View>
          <TouchableOpacity
            onPress={handleVerify}
            style={{ height: hp(7), backgroundColor: colorPalette.primary }}
            className="rounded-full justify-center items-center"
          >
            <TextMedium
              style={{ fontSize: hp(2.4), color: colorPalette.white }}
            >
              Verify
            </TextMedium>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
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
  inputbody: {
    borderWidth: 2,
    borderRadius: 12,
    borderColor: colorPalette.gray4,
    height: wp(6),
  },
});
