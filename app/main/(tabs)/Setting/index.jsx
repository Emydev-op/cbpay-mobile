import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  Pressable,
  Switch,
} from "react-native";
import React from "react";
import TextRegular, {
  TextBold,
  TextMedium,
} from "../../../../components/ThemeText";
import { colorPalette } from "../../../../constant/color";

// icons
import SearchIcon from "../../../../assets/icon/search.svg";
import ChevronRightIcon from "../../../../assets/icon/chevron-right.svg";
import ShirtIcon from "../../../../assets/icon/shirt.svg";
import NotificationIcon from "../../../../assets/icon/bell.svg";
import SecurityIcon from "../../../../assets/icon/lock.svg";
import TermsIcon from "../../../../assets/icon/terms.svg";
import AboutIcon from "../../../../assets/icon/about.svg";
import LogoutIcon from "../../../../assets/icon/logout.svg";
import { useRouter } from "expo-router";

const options = [
  { name: "Appearance", icon: <ShirtIcon />, path: "/main/Setting/Appearance" },
  { name: "Notification", icon: <NotificationIcon /> },
  { name: "Security", icon: <SecurityIcon />, path: "/main/Setting/Security" },
  { name: "Terms & Conditions", icon: <TermsIcon /> },
  { name: "About", icon: <AboutIcon /> },
];

export default function Setting() {
  const router = useRouter();
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <SafeAreaView style={styles.container}>
      <View className="flex-row justify-between px-4 items-center py-4">
        <TextBold style={{ color: colorPalette.primary, fontSize: 25 }}>
          Setting
        </TextBold>
        <Pressable>
          <SearchIcon />
        </Pressable>
      </View>
      <View className="px-4 mt-6 space-y-4">
        <View
          className="flex-row justify-between items-center rounded-2xl px-4 py-3"
          style={{
            backgroundColor: colorPalette.primary2,
          }}
        >
          <View className="flex-row items-center gap-x-2">
            <View
              className=" w-12 h-12 rounded-full justify-center items-center"
              style={{
                backgroundColor: colorPalette.primary,
              }}
            >
              <TextBold
                className="text-3xl"
                style={{
                  color: colorPalette.primary2,
                }}
              >
                M
              </TextBold>
            </View>
            <View>
              <TextMedium style={{ color: colorPalette?.gray1, fontSize: 12 }}>
                Last login: Apr 12, 2024 | 09:27 AM
              </TextMedium>
              <TextRegular style={{ fontSize: 18 }}>
                Michael Umeh Samuel
              </TextRegular>
            </View>
          </View>
          <ChevronRightIcon />
        </View>

        <View
          style={{
            backgroundColor: colorPalette.primary2,
          }}
          className=" rounded-2xl space-y-1 py-3"
        >
          {options.map((data) => {
            if (data.name === "Notification") {
              return (
                <View
                  key={data?.name}
                  className="flex-row justify-between items-center px-4 "
                >
                  <View className="flex-row items-center gap-x-2">
                    {data?.icon}
                    <TextRegular style={{ fontSize: 18 }}>
                      {data?.name}
                    </TextRegular>
                  </View>
                  <Switch
                    value={isSwitchOn}
                    onValueChange={onToggleSwitch}
                    className="border"
                    trackColor={{
                      false: "#767577",
                      true: colorPalette.primary,
                    }}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                  />
                </View>
              );
            }
            return (
              <Pressable
                onPress={() => {
                  data?.path && router.push(data?.path);
                }}
                key={data?.name}
                className="flex-row justify-between items-center px-4 py-3"
              >
                <View className="flex-row items-center gap-x-2">
                  {data?.icon}
                  <TextRegular style={{ fontSize: 18 }}>
                    {data?.name}
                  </TextRegular>
                </View>
                <ChevronRightIcon />
              </Pressable>
            );
          })}
        </View>

        <View
          className="flex-row justify-between items-center rounded-2xl px-4 py-3"
          style={{
            backgroundColor: colorPalette.primary2,
          }}
        >
          <View className="flex-row items-center gap-x-2">
            <LogoutIcon />
            <TextRegular style={{ fontSize: 18, color: colorPalette.error }}>
              Logout
            </TextRegular>
          </View>
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
