import React from "react";
import { Text } from "react-native";

export default function TextRegular({ children, style, ...props }) {
  return (
    <Text style={[{ fontFamily: "DMSans_400Regular" }, style]} {...props}>
      {children}
    </Text>
  );
}

export function TextMedium({ children, style, ...props }) {
  return (
    <Text style={[{ fontFamily: "DMSans_500Medium" }, style]} {...props}>
      {children}
    </Text>
  );
}

export function TextBold({ children, style, ...props }) {
  return (
    <Text style={[{ fontFamily: "DMSans_700Bold" }, style]} {...props}>
      {children}
    </Text>
  );
}
