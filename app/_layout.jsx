import { Stack } from "expo-router";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import { SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { PaperProvider } from "react-native-paper";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  let [fontsLoaded, fontError] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 2000);
    }
  }, [fontError, fontsLoaded]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <>
      <PaperProvider>
        <StatusBar style="dark" />
        <Stack
          screenOptions={{ headerShown: false }}
          initialRouteName="(login)/LoginOptions"
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="(login)/LoginPassword" />
          <Stack.Screen name="(login)/LoginOptions" />
          <Stack.Screen name="(login)/LoginPasscode" />
        </Stack>
      </PaperProvider>
    </>
  );
}
