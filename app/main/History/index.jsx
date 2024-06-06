import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  Pressable,
} from "react-native";
import React from "react";
import { TextBold } from "../../../components/ThemeText";
import { colorPalette } from "../../../constant/color";

// icons
import FilterIcon from '../../../assets/icon/filter.svg'; 

export default function History() {
  return (
    <SafeAreaView style={styles.container}>
      <View className="flex-row justify-between px-4 items-center py-4">
        <TextBold style={{ color: colorPalette.primary, fontSize: 25 }}>
          History
        </TextBold>
        <Pressable> 
          <FilterIcon />
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
});
