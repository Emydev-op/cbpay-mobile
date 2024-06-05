import { View } from "react-native";
import { TextMedium } from "../ThemeText";
import { colorPalette } from "../../constant/color";
import React from "react";

export function TabbarHome({ focused, children, title }) {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      {children}
      <TextMedium
        style={{
          color: focused ? colorPalette.primary : colorPalette.gray1,
          fontSize: 13,
          marginTop: 4,
        }}
      >
        {title}
      </TextMedium>
    </View>
  );
}

export function TabbarScan({  children }) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: 58,
        width: 58,
        borderRadius: 599,
        backgroundColor: colorPalette.primary,
        marginBottom: 56,
        elevation: 5,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
      }}
    >
      {children}
    </View>
  );
}
