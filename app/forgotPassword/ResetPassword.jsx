import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Pressable,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { colorPalette } from "../../constant/color";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import {
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
} from "react-native-heroicons/outline";
import TextRegular, { TextBold, TextMedium } from "../../components/ThemeText";
import SignUpNav from "../../components/signup/SignUpNav";
import { TextInput } from "react-native-paper";
import { useRouter } from "expo-router";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword2, setShowPassword2] = useState(false);
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <SignUpNav name={"Forgot Password"} />
      <View className="px-4 flex-1 justify-between pb-4">
        <View className="space-y-3">
          <TextBold style={styles.header}>Reset Password</TextBold>
          <TextRegular style={styles.subheader}>
            Wisely choose your password to make your account secure.
          </TextRegular>
          <View className="space-y-2">
            {/* First Password */}
            <View
              className="flex-row border-2 px-3 w-full items-center rounded-xl"
              style={{ borderColor: colorPalette.gray1 }}
            >
              <LockClosedIcon color={colorPalette.gray1} size={hp(3.5)} />

              <TextInput
                label="Password"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={(no) => setPassword(no)}
                mode="outlined"
                className="bg-white flex-1 text-black"
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
              <Pressable
                onPress={() => setShowPassword((prev) => !prev)}
                className="pl-2 pr-1"
              >
                {showPassword ? (
                  <EyeIcon color={colorPalette.gray1} size={hp(3.5)} />
                ) : (
                  <EyeSlashIcon color={colorPalette.gray1} size={hp(3.5)} />
                )}
              </Pressable>
            </View>
            <TextRegular
              style={{ color: colorPalette.primary, fontSize: hp(1.7) }}
            >
              Must include at least 8 characters, uppercase, digit
            </TextRegular>
            {/* Confirm Password */}
            <View
              className="flex-row border-2 px-3 w-full items-center rounded-xl"
              style={{ borderColor: colorPalette.gray1 }}
            >
              <LockClosedIcon color={colorPalette.gray1} size={hp(3.5)} />

              <TextInput
                label="Confirm Password"
                secureTextEntry={!showPassword2}
                value={confirmPassword}
                onChangeText={(no) => setConfirmPassword(no)}
                mode="outlined"
                className="bg-white flex-1 text-black"
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
              <Pressable
                onPress={() => setShowPassword2((prev) => !prev)}
                className="pl-2 pr-1"
              >
                {showPassword2 ? (
                  <EyeIcon color={colorPalette.gray1} size={hp(3.5)} />
                ) : (
                  <EyeSlashIcon color={colorPalette.gray1} size={hp(3.5)} />
                )}
              </Pressable>
            </View>
          </View>
        </View>
        <View>
          <Pressable
            onPress={() => router.push("/LoginPassword")}
            style={{ height: hp(7), backgroundColor: colorPalette.primary }}
            className="rounded-full justify-center items-center"
          >
            <TextMedium
              style={{ fontSize: hp(2.4), color: colorPalette.white }}
            >
              Sign Up
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
