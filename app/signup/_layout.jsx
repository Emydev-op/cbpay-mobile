import React from "react";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="SignUpOtp" />
      <Stack.Screen name="VerifyID" />
      <Stack.Screen name="ChoosePassword" />
      <Stack.Screen name="SetPasscode" />
      <Stack.Screen name="ConfirmPasscode" />
    </Stack>
  );
}
